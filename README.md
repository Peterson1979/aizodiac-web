# AI Zodiac Web

> Next-Generation Astrological Intelligence Web Platform

A production-ready Astro website built with strict TypeScript, vanilla CSS design tokens, and Cloudflare Workers deployment readiness. Independently deployable with zero runtime dependency on external backends.

---

## 🌌 Tech Stack

- **Framework**: [Astro 7](https://astro.build/) (`v7.3.2`)
- **Language**: Strict TypeScript (`noImplicitAny`, `strictNullChecks`, etc.)
- **Styling**: Vanilla CSS (Cosmic & glassmorphic design system, responsive)
- **Deployment Target**: Cloudflare Workers (`*.workers.dev`)
- **Deployment Tool**: Wrangler (`v4.131.2`)
- **Media Storage**: Cloudflare R2 (`aizodiac-assets` bucket abstraction)
- **Image Generation**: Cloudflare Workers AI (`@cf/black-forest-labs/flux-1-schnell` abstraction)
- **Text Generation**: Groq API (`openai/gpt-oss-120b` abstraction)
- **CI / CD**: GitHub Actions

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

### 3. Run Local Development Server

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321).

### 4. Quality & Type Checking

```bash
npm run check
```

### 5. Production Build

```bash
npm run build
```

---

## 🛡️ Cost Protection & Limits

The application includes built-in cost protection guards (`src/config/limits.ts`) to prevent unintended cloud expenditures.

> **Important**: Cloudflare account-level free limits and Groq account tier limits are the authoritative ceilings. Application-level guards act as conservative programmatic circuit-breakers to safeguard against runaway API calls.

| Variable | Description | Default |
|---|---|---|
| `AI_DAILY_TEXT_LIMIT` | Max text generation calls / day | `50` |
| `AI_MONTHLY_TEXT_LIMIT` | Max text generation calls / month | `1000` |
| `AI_DAILY_IMAGE_LIMIT` | Max image generation calls / day | `20` |
| `AI_MONTHLY_IMAGE_LIMIT` | Max image generation calls / month | `400` |
| `AI_MAX_ARTICLE_LENGTH_TOKENS` | Max token budget per article | `3500` |

---

## 📂 Project Structure

```
aizodiac-web/
├── .github/workflows/ci.yml       # GitHub Actions CI workflow
├── public/
│   └── favicon.svg               # Astrological SVG favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro      # Navigation header
│   │   │   └── Footer.astro      # Semantic footer with ecosystem links
│   │   └── seo/
│   │       └── SEOHead.astro     # Canonical, Open Graph, Twitter & JSON-LD
│   ├── config/
│   │   ├── ai.ts                 # AI model defaults
│   │   ├── limits.ts             # Cost protection limit definitions & assertions
│   │   └── site.ts               # Site metadata & canonical URL resolver
│   ├── layouts/
│   │   └── BaseLayout.astro      # Master layout component
│   ├── lib/
│   │   ├── ai/
│   │   │   ├── image.ts          # Cloudflare Workers AI (FLUX) service abstraction
│   │   │   └── text.ts           # Groq (openai/gpt-oss-120b) service abstraction
│   │   ├── seo/
│   │   │   └── meta.ts           # Schema.org JSON-LD and canonical helpers
│   │   └── storage/
│   │       └── r2.ts             # Cloudflare R2 (aizodiac-assets) storage service
│   ├── pages/
│   │   ├── 404.astro             # Custom 404 page
│   │   ├── index.astro           # Production landing page & 13 core features
│   │   └── robots.txt.ts         # Dynamic robots.txt endpoint
│   ├── styles/
│   │   └── global.css            # Cosmic CSS design tokens & reset
│   └── types/
│       └── content.ts            # Content schema, zodiac & 13 app features taxonomy
├── .env.example                  # Safe template for environment variables
├── .gitignore                    # Secrets, cache, and build artifact exclusions
├── astro.config.mjs              # Astro configuration with Cloudflare adapter & sitemap
├── package.json                  # Dependencies (Astro 7, TypeScript, Wrangler)
├── tsconfig.json                 # Strict TypeScript configuration
└── wrangler.toml                 # Cloudflare Workers configuration
```

---

## ☁️ Cloudflare Workers Deployment

When ready to deploy to Cloudflare Workers:
1. Ensure your Wrangler CLI is authenticated to the **AI Zodiac** Cloudflare account (`npx wrangler login`).
2. Set any secrets via `wrangler secret put <KEY>` (e.g. `GROQ_API_KEY`, `CLOUDFLARE_WORKERS_AI_API_TOKEN`).
3. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```
