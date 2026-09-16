/**
 * AI Zodiac - Inbound UTM Tracking & Session Attribution Continuity
 * 
 * Lightweight client-side script that:
 * 1. Captures inbound UTM parameters from window.location.search
 * 2. Persists campaign attribution in sessionStorage for the browsing session
 * 3. Enriches outbound Google Play Store CTAs with preserved campaign context
 */

export const INBOUND_UTM_STORAGE_KEY = 'aizodiac_inbound_utm';

export interface InboundUtmRecord {
  readonly utmSource?: string | undefined;
  readonly utmMedium?: string | undefined;
  readonly utmCampaign?: string | undefined;
  readonly utmContent?: string | undefined;
  readonly utmTerm?: string | undefined;
  readonly capturedAt: number;
}

/**
 * Parses inbound query parameters from a URL search string.
 */
export function extractInboundUtmParams(search: string): InboundUtmRecord | null {
  try {
    const params = new URLSearchParams(search);
    const utmSource = params.get('utm_source')?.trim();
    const utmMedium = params.get('utm_medium')?.trim();
    const utmCampaign = params.get('utm_campaign')?.trim();
    const utmContent = params.get('utm_content')?.trim();
    const utmTerm = params.get('utm_term')?.trim();

    if (!utmSource && !utmCampaign && !utmMedium) {
      return null;
    }

    return {
      utmSource: utmSource || undefined,
      utmMedium: utmMedium || undefined,
      utmCampaign: utmCampaign || undefined,
      utmContent: utmContent || undefined,
      utmTerm: utmTerm || undefined,
      capturedAt: Date.now(),
    };
  } catch {
    return null;
  }
}

/**
 * Inlines a zero-dependency client script for BaseLayout.
 */
export const INBOUND_UTM_INLINE_SCRIPT = `
(function() {
  var STORAGE_KEY = 'aizodiac_inbound_utm';
  var PLAY_STORE_HOST = 'play.google.com';

  function getStoredUtm() {
    try {
      var raw = window.sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveInboundUtm() {
    try {
      var search = window.location.search;
      if (!search) return;
      var params = new URLSearchParams(search);
      var src = params.get('utm_source');
      var med = params.get('utm_medium');
      var cmp = params.get('utm_campaign');
      var cnt = params.get('utm_content');
      var trm = params.get('utm_term');

      if (src || cmp || med) {
        var record = {
          utmSource: src || '',
          utmMedium: med || '',
          utmCampaign: cmp || '',
          utmContent: cnt || '',
          utmTerm: trm || '',
          timestamp: Date.now()
        };
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(record));
      }
    } catch (e) {}
  }

  function mergePlayStoreUrl(urlStr, inbound) {
    if (!inbound) return urlStr;
    try {
      var parsed = new URL(urlStr);
      if (parsed.hostname !== PLAY_STORE_HOST) return urlStr;

      var existingReferrer = parsed.searchParams.get('referrer') || '';
      var existingParams = new URLSearchParams(decodeURIComponent(existingReferrer));

      var finalSource = inbound.utmSource || existingParams.get('utm_source') || 'website';
      var finalMedium = inbound.utmMedium || existingParams.get('utm_medium') || 'cta';
      var finalCampaign = inbound.utmCampaign || existingParams.get('utm_campaign') || '';
      var localContent = existingParams.get('utm_content') || '';
      var inboundContent = inbound.utmContent || '';
      var finalContent = inboundContent ? (inboundContent + (localContent ? '_' + localContent : '')) : localContent;
      var finalTerm = inbound.utmTerm || existingParams.get('utm_term') || '';

      var parts = [
        'utm_source=' + encodeURIComponent(finalSource),
        'utm_medium=' + encodeURIComponent(finalMedium)
      ];
      if (finalCampaign) parts.push('utm_campaign=' + encodeURIComponent(finalCampaign));
      if (finalContent) parts.push('utm_content=' + encodeURIComponent(finalContent));
      if (finalTerm) parts.push('utm_term=' + encodeURIComponent(finalTerm));

      parsed.searchParams.set('referrer', parts.join('&'));
      return parsed.toString();
    } catch (e) {
      return urlStr;
    }
  }

  function enrichAllLinks() {
    var inbound = getStoredUtm();
    if (!inbound) return;
    try {
      var links = document.querySelectorAll('a[href*="' + PLAY_STORE_HOST + '"]');
      links.forEach(function(link) {
        link.href = mergePlayStoreUrl(link.href, inbound);
      });
    } catch (e) {}
  }

  // 1. Capture on initial page load
  saveInboundUtm();

  // 2. Enhance links on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enrichAllLinks);
  } else {
    enrichAllLinks();
  }

  // 3. Delegated click handler to intercept dynamic/late-rendered CTAs
  document.addEventListener('click', function(e) {
    var target = e.target && e.target.closest ? e.target.closest('a') : null;
    if (target && target.href && target.href.indexOf(PLAY_STORE_HOST) !== -1) {
      var inbound = getStoredUtm();
      if (inbound) {
        target.href = mergePlayStoreUrl(target.href, inbound);
      }
    }
  }, true);
})();
`;
