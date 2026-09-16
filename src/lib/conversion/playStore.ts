/**
 * AI Zodiac - Google Play Store URL & Attribution Builder
 * 
 * Target App: com.oberon.aizodiac
 * Base Play Store URL: https://play.google.com/store/apps/details?id=com.oberon.aizodiac
 */

export interface PlayStoreAttributionParams {
  readonly utmSource?: string | undefined;
  readonly utmMedium?: string | undefined;
  readonly utmCampaign?: string | undefined;
  readonly utmContent?: string | undefined;
  readonly utmTerm?: string | undefined;
}

export const PLAY_STORE_BASE_URL = 'https://play.google.com/store/apps/details?id=com.oberon.aizodiac';

/**
 * Builds a deterministic Google Play Store URL with standard Install Referrer parameters.
 * 
 * Output example:
 * https://play.google.com/store/apps/details?id=com.oberon.aizodiac&referrer=utm_source%3Dwebsite%26utm_medium%3Dcta%26utm_campaign%3Dhomepage%26utm_content%3Dhero_play_btn
 */
export function buildPlayStoreUrl(params: PlayStoreAttributionParams = {}): string {
  const source = params.utmSource?.trim() || 'website';
  const medium = params.utmMedium?.trim() || 'cta';

  const referrerParts: string[] = [
    `utm_source=${encodeURIComponent(source)}`,
    `utm_medium=${encodeURIComponent(medium)}`,
  ];

  if (params.utmCampaign?.trim()) {
    referrerParts.push(`utm_campaign=${encodeURIComponent(params.utmCampaign.trim())}`);
  }

  if (params.utmContent?.trim()) {
    referrerParts.push(`utm_content=${encodeURIComponent(params.utmContent.trim())}`);
  }

  if (params.utmTerm?.trim()) {
    referrerParts.push(`utm_term=${encodeURIComponent(params.utmTerm.trim())}`);
  }

  const referrerQuery = encodeURIComponent(referrerParts.join('&'));
  return `${PLAY_STORE_BASE_URL}&referrer=${referrerQuery}`;
}

/**
 * Parses raw Google Play URL referrer parameter into structured attribution params.
 */
export function parsePlayStoreReferrer(urlOrReferrer: string): PlayStoreAttributionParams {
  try {
    let referrerRaw = urlOrReferrer;
    if (urlOrReferrer.includes('referrer=')) {
      const parsedUrl = new URL(urlOrReferrer);
      referrerRaw = parsedUrl.searchParams.get('referrer') || '';
    }

    const decoded = decodeURIComponent(referrerRaw);
    const searchParams = new URLSearchParams(decoded);

    return {
      utmSource: searchParams.get('utm_source') || undefined,
      utmMedium: searchParams.get('utm_medium') || undefined,
      utmCampaign: searchParams.get('utm_campaign') || undefined,
      utmContent: searchParams.get('utm_content') || undefined,
      utmTerm: searchParams.get('utm_term') || undefined,
    };
  } catch {
    return {};
  }
}
