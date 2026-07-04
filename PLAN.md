# octopy.dev — Full Implementation Plan

> **Developer:** Supian M · **Brand:** Octopy ID · **Domain:** octopy.dev  
> **Stack:** Nuxt 4 · Vue 3 Composition API (TypeScript) · Tailwind CSS v4 · Bun · Oxlint  
> **Revised:** 2026-07-04

---

## Table of Contents

1. [Project Vision & Goals](#1-project-vision--goals)
2. [Architecture Overview](#2-architecture-overview)
3. [Modular Directory Structure](#3-modular-directory-structure)
4. [Nuxt 4 Configuration](#4-nuxt-4-configuration)
5. [Tailwind CSS v4 Design System Tokens](#5-tailwind-css-v4-design-system-tokens)
6. [Theme Switcher Architecture](#6-theme-switcher-architecture)
7. [Component Architecture](#7-component-architecture)
8. [Page & Route Map](#8-page--route-map)
9. [Content Architecture (@nuxt/content v3)](#9-content-architecture-nuxtcontent-v3)
10. [Homepage Copywriting Draft](#10-homepage-copywriting-draft)
11. [Services Copywriting Draft](#11-services-copywriting-draft)
12. [SEO & Meta Strategy](#12-seo--meta-strategy)
13. [Tooling & DX Setup](#13-tooling--dx-setup)
14. [Execution Checklist](#14-execution-checklist)

---

## 1. Project Vision & Goals

Octopy ID is the digital face of an independent Indonesian engineering studio. The site must simultaneously:

- **Convert**: Position Supian M as a premium, battle-tested engineer. Every section must signal expertise, build trust, and funnel visitors toward consulting engagements.
- **Showcase**: Act as a living portfolio — OSS projects, blog posts, and client proof-points must be easy to discover and beautifully presented.
- **Scale**: The architecture must be maintainable solo, content-driven, and deployable as a fully-static site.

**Design Mandate:**
> Hyper-clean. High-contrast. Terminal-meets-editorial. Feels like Vercel, Linear, and Oxide Computer Company had a child — but with soul.

### Brand & Personal Identity Strategy
To represent both sides — **Octopy ID** (The Brand) and **Supian M** (The Person) — the website utilizes a *dual-tone* strategy:

- **The Brand (Octopy ID):** The Octopus motif symbolizes multitasking, adaptability, and intelligence in handling complex infrastructure problems (multiple "arms" for a multi-disciplinary stack like Linux, Go, Laravel, Mail Server). Tone: Professional, scalable, and battle-tested. Visuals: Subtle octopus animation elements and a Rust/Burnt Orange (#b3471e) color scheme conveying premium energy.
- **The Person (Supian M):** The Architect & Executor. Tone: Direct, transparent, and execution-oriented (no-bullshit). The copywriting uses a first-person perspective. The `/about` and `/contact` pages separate the "Octopy Philosophy" narrative from the personal touch, ensuring clients feel they are talking to an expert, not a faceless corporation.

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                  octopy.dev (Nuxt 4)                 │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │  /about  │  │  /lab    │  │   /insights      │  │
│  │  About   │  │  OSS /   │  │   Blog (MD/MDC)  │  │
│  │   Me     │  │ Portfolio│  │                  │  │
│  └──────────┘  └──────────┘  └──────────────────┘  │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │  /services  (3 Pillars)                       │   │
│  │  Linux · Mail Infrastructure · App Dev       │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │  Shared: Design System · Components · Compos.│   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

**Rendering strategy:**
- All pages → `ssr: false` (static generation via `nuxt generate`)  
- Blog posts → pre-rendered at build time via `@nuxt/content`  
- No API routes needed in v1

---

## 3. Modular Directory Structure

The structure below follows Nuxt 4's `app/` convention and uses **Nuxt Layers** to cleanly separate the four domains from the shared core.

```
octopy.dev/
│
├── app/                          # Nuxt 4 app root (srcDir)
│   ├── app.vue                   # Root layout host
│   ├── error.vue                 # Global error page
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css          # Tailwind v4 @import + @theme tokens
│   │   │   ├── prose.css         # Blog MDC prose overrides
│   │   │   └── animations.css    # Keyframe definitions
│   │   └── fonts/                # Self-hosted font files (if any)
│   │
│   ├── components/
│   │   ├── ui/                   # Primitive design-system components
│   │   │   ├── Button.vue
│   │   │   ├── Badge.vue
│   │   │   ├── Card.vue
│   │   │   ├── Divider.vue
│   │   │   ├── Tag.vue
│   │   │   └── Tooltip.vue
│   │   │
│   │   ├── layout/               # Structural shell components
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   ├── AppNav.vue
│   │   │   └── AppMobileMenu.vue
│   │   │
│   │   ├── theme/
│   │   │   └── ThemeSwitcher.vue # Dark/light toggle
│   │   │
│   │   ├── home/                 # Homepage-specific sections
│   │   │   ├── HeroSection.vue
│   │   │   ├── TechStack.vue
│   │   │   ├── FeaturedProjects.vue
│   │   │   └── ServicesTeaser.vue
│   │   │
│   │   ├── about/
│   │   │   ├── Timeline.vue      # Work history
│   │   │   ├── PrincipleCard.vue # Engineering philosophy cards
│   │   │   ├── StackGrid.vue     # Core tech stack grid
│   │   │   ├── PersonalStory.vue # "Supian M" narrative
│   │   │   └── BrandPhilosophy.vue # "Octopy ID" manifesto
│   │   │
│   │   ├── contact/              # Contact page & form
│   │   │   ├── ContactForm.vue
│   │   │   └── ContactInfo.vue
│   │   │
│   │   ├── lab/
│   │   │   ├── ProjectCard.vue   # OSS project display card
│   │   │   ├── GithubBadge.vue   # Dynamic GitHub shields.io badge
│   │   │   └── PackageFilter.vue # Filter by: Laravel / Go / All
│   │   │
│   │   ├── insights/
│   │   │   ├── PostCard.vue      # Blog post list card
│   │   │   ├── PostMeta.vue      # Author · date · read-time
│   │   │   └── TableOfContents.vue
│   │   │
│   │   └── services/
│   │       ├── PillarCard.vue    # Service pillar showcase card
│   │       ├── FeatureList.vue   # Bullet feature list with icons
│   │       └── ContactCTA.vue    # Call-to-action block
│   │
│   ├── composables/
│   │   ├── useTheme.ts           # Theme state + persistence
│   │   ├── useReadingTime.ts     # Blog read-time estimation
│   │   ├── useActiveSection.ts   # Scrollspy for nav highlighting
│   │   └── useGithubStats.ts     # Fetch & cache GitHub API data
│   │
│   ├── layouts/
│   │   ├── default.vue           # Standard layout (header + footer)
│   │   ├── blog.vue              # Blog layout (TOC sidebar)
│   │   └── minimal.vue           # Minimal layout (landing/services)
│   │
│   ├── pages/
│   │   ├── index.vue             # Homepage
│   │   ├── about.vue             # About Me
│   │   ├── contact.vue           # Contact Form Page
│   │   ├── lab/
│   │   │   └── index.vue         # Lab / Portfolio listing
│   │   ├── insights/
│   │   │   ├── index.vue         # Blog listing
│   │   │   └── [slug].vue        # Blog post detail
│   │   └── services/
│   │       ├── index.vue         # Services overview
│   │       ├── linux.vue         # Linux Server Engineering
│   │       ├── mail.vue          # Enterprise Mail Infrastructure
│   │       └── app-dev.vue       # Scalable App Development
│   │
│   ├── middleware/
│   │   └── analytics.global.ts   # Lightweight page-view tracking (future)
│   │
│   └── server/                   # Nuxt Nitro API routes
│       └── api/
│           └── contact.post.ts   # Form submission handler (Nodemailer/Resend)
│
├── content/                      # @nuxt/content v3 source
│   ├── insights/                 # Blog posts
│   │   ├── 2025-01-laravel-ddd.md
│   │   └── 2025-03-go-pkg-release.md
│   └── lab/                      # OSS project data (YAML front-matter)
│       ├── laravel-octopy.md
│       └── go-mailkit.md
│
├── public/
│   ├── og/                       # Open Graph images
│   ├── favicon.svg
│   └── robots.txt
│
├── layers/                       # Nuxt Layers (optional domain isolation)
│   ├── blog/                     # Self-contained blog layer
│   │   └── nuxt.config.ts
│   └── services/                 # Self-contained services layer
│       └── nuxt.config.ts
│
├── nuxt.config.ts
├── content.config.ts
├── oxlint.json
├── tsconfig.json
├── package.json
└── PLAN.md                       # this file
```

---

## 4. Nuxt 4 Configuration

**`nuxt.config.ts`** — target configuration:

```typescript
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  // Nuxt 4 app dir convention
  future: { compatibilityVersion: 4 },

  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxt/content',          // Blog & Lab data
    '@nuxtjs/tailwindcss',    // Tailwind CSS v4 bridge
    '@nuxt/image',            // Optimised NuxtImg
    '@nuxt/icon',             // Iconify icon system
    '@nuxt/fonts',            // Auto-managed fonts
    '@vueuse/nuxt',           // VueUse composables
    '@nuxtjs/seo',            // Unified SEO (robots, sitemap, OG)
    '@nuxtjs/color-mode',     // SSR-safe dark mode
  ],

  // Nuxt Fonts configuration
  fonts: {
    families: [
      { name: 'Iosevka', provider: 'fontsource' }
    ]
  },

  // Color mode: class-based (body.dark) for Tailwind v4 compat
  colorMode: {
    classSuffix: '',          // adds class "dark" not "dark-mode"
    preference: 'system',
    fallback: 'dark',
    storageKey: 'octopy-theme',
  },

  // CSS entry
  css: ['~/assets/css/main.css'],

  // App-level head defaults
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  // Static generation
  nitro: {
    preset: 'static',
  },

  // Content v3 collections
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'one-dark-pro',
          },
        },
      },
    },
  },
})
```

---

## 5. Tailwind CSS v4 Design System Tokens

Tailwind CSS v4 moves configuration into pure CSS using the `@theme` directive. All design tokens live in `app/assets/css/main.css`.

### `app/assets/css/main.css`

```css
/* =========================================================
   OCTOPY ID — Design System Tokens
   Tailwind CSS v4 @theme (CSS-native configuration)
   ========================================================= */

@import "tailwindcss";

@theme {
  /* Typography */
  --font-sans:    "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono:    "Iosevka", ui-monospace, "Cascadia Code", monospace;

  /* Brand Palette (Octopy) */
  /* Primary: Rust / Burnt Orange — based on #b3471e */
  --color-primary-50:   #fdf4f1;
  --color-primary-100:  #fae5de;
  --color-primary-200:  #f5cec1;
  --color-primary-300:  #edae99;
  --color-primary-400:  #e28266;
  --color-primary-500:  #b3471e;   /* Brand core */
  --color-primary-600:  #9d3c16;
  --color-primary-700:  #833315;
  --color-primary-800:  #6c2b14;
  --color-primary-900:  #582513;
  --color-primary-950:  #2f1108;
}

/* ==========================================================
   DARK MODE TOKEN OVERRIDES
   Uses .dark class on html (set by @nuxtjs/color-mode)
   ========================================================== */

.dark {
  
}

/* ==========================================================
   GLOBAL BASE STYLES
   ========================================================== */

@layer base {
  /* Note: Avoid native CSS, use utility classes via @apply. */
  /* Native CSS should only be used when absolutely necessary. */
  *, *::before, *::after {
    @apply border-border;
    box-sizing: border-box;
  }

  html {
    @apply font-sans bg-bg text-text-primary antialiased;
    scroll-behavior: smooth;
  }

  ::selection {
    @apply bg-primary-500 text-white;
  }

  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { @apply bg-bg; }
  ::-webkit-scrollbar-thumb {
    @apply bg-border-strong rounded-full;
  }
  ::-webkit-scrollbar-thumb:hover { @apply bg-text-muted; }
}

/* ==========================================================
   UTILITY EXTENSIONS (@utility for Tailwind v4)
   ========================================================== */

@utility glass {
  @apply bg-surface/70 backdrop-blur-xl border border-border/50;
}

@utility glow-primary {
  @apply shadow-glow;
}

@utility text-gradient-primary {
  @apply bg-gradient-to-br from-primary-400 to-accent-400 bg-clip-text text-transparent;
}

@utility focus-ring {
  @apply outline-2 outline-offset-2 outline-interactive;
}
```

---

## 6. Theme Switcher Architecture

### Composable: `app/composables/useTheme.ts`

```typescript
import { useColorMode } from '#imports'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const colorMode = useColorMode()

  const isDark = computed(() => colorMode.value === 'dark')

  const currentTheme = computed<Theme>(() =>
    colorMode.preference === 'system' ? 'system' : colorMode.value as Theme
  )

  function setTheme(theme: Theme) {
    colorMode.preference = theme
  }

  function toggleTheme() {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return { isDark, currentTheme, setTheme, toggleTheme }
}
```

### Component: `app/components/theme/ThemeSwitcher.vue`

```vue
<script setup lang="ts">
const { isDark, currentTheme, setTheme, toggleTheme } = useTheme()

const themes = [
  { value: 'light',  label: 'Light',  icon: 'ph:sun-bold' },
  { value: 'dark',   label: 'Dark',   icon: 'ph:moon-bold' },
  { value: 'system', label: 'System', icon: 'ph:monitor-bold' },
] as const
</script>

<template>
  <div class="relative" role="group" aria-label="Theme selector">

    <!-- Compact toggle (mobile) -->
    <button
      class="theme-toggle"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      :aria-pressed="isDark"
      @click="toggleTheme"
    >
      <Icon :name="isDark ? 'ph:sun-bold' : 'ph:moon-bold'" size="18" />
    </button>

    <!-- Segmented control (desktop) -->
    <div class="theme-segment hidden md:flex" role="radiogroup" aria-label="Theme">
      <button
        v-for="t in themes"
        :key="t.value"
        class="theme-segment__btn"
        :class="{ 'theme-segment__btn--active': currentTheme === t.value }"
        :aria-checked="currentTheme === t.value"
        role="radio"
        @click="setTheme(t.value)"
      >
        <Icon :name="t.icon" size="14" />
        <span>{{ t.label }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.theme-toggle {
  @apply flex items-center justify-center w-[36px] h-[36px] rounded-[var(--radius-md)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] text-[var(--color-text-secondary)] cursor-pointer transition-all duration-[var(--duration-fast)] ease-[var(--ease-smooth)];
}
.theme-toggle:hover {
  @apply bg-[var(--color-interactive-muted)] text-[var(--color-interactive)] border-[var(--color-interactive)];
}
.theme-segment {
  @apply flex items-center gap-[2px] p-[3px] bg-[var(--color-bg-subtle)] border border-[var(--color-border)] rounded-[var(--radius-lg)];
}
.theme-segment__btn {
  @apply flex items-center gap-[5px] px-[10px] py-[4px] rounded-[var(--radius-md)] text-[12px] font-medium text-[var(--color-text-muted)] cursor-pointer bg-transparent border-none transition-all duration-[var(--duration-fast)] ease-[var(--ease-smooth)];
}
.theme-segment__btn:hover {
  @apply text-[var(--color-text-secondary)] bg-[var(--color-surface)];
}
.theme-segment__btn--active {
  @apply bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)];
}
</style>
```

**Key decisions:**
- `@nuxtjs/color-mode` handles SSR hydration safely — no flash of wrong theme.
- `.dark` class is applied to `<html>` (`classSuffix: ''`), which Tailwind v4's `dark:` variant reads natively.
- Mobile: compact icon toggle. Desktop: 3-way segmented control (light / dark / system).
- No manual `localStorage` — `color-mode` persists to `octopy-theme` key automatically.

---

## 7. Component Architecture

**Styling Principle:**
> **Utility-First HTML:** Always prioritize using Tailwind utility classes directly in HTML templates. Avoid creating custom CSS or using `@apply` unless abstracting highly complex components or when forced to use specific pseudo-elements.

### Design Primitives

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `ui/Button.vue` | CTA buttons, links-as-buttons | `variant: primary/ghost/outline/link`, `size`, `loading`, `icon` |
| `ui/Badge.vue` | Tech stack tags, status pills | `variant: brand/neutral/success/warning`, `size` |
| `ui/Card.vue` | Universal surface container | `hoverable`, `bordered`, `glass` |
| `ui/Tag.vue` | Small mono-font code labels | `color` |
| `ui/Divider.vue` | Section separators | `label`, `orientation` |
| `ui/Tooltip.vue` | Hover information | `content`, `placement` |
| `ui/Input.vue` | Form input field | `type`, `placeholder`, `modelValue`, `error` |
| `ui/Textarea.vue` | Form textarea | `rows`, `placeholder`, `modelValue`, `error` |

### Layout Shell

| Component | Responsibility |
|-----------|---------------|
| `AppHeader.vue` | Fixed top nav with logo, nav links, ThemeSwitcher |
| `AppNav.vue` | Navigation links with active scrollspy |
| `AppFooter.vue` | Links, social icons, copyright |
| `AppMobileMenu.vue` | Full-screen overlay mobile nav |

### Section Components (Homepage)

| Component | Section |
|-----------|---------|
| `home/HeroSection.vue` | Headline, sub-copy, dual CTAs, animated octopus motif |
| `home/TechStack.vue` | Marquee of tech logos |
| `home/FeaturedProjects.vue` | 3 pinned OSS projects from Lab |
| `home/ServicesTeaser.vue` | 3-column service pillar cards |

### Section Components (About & Contact)

| Component | Section |
|-----------|---------|
| `about/PersonalStory.vue` | The human element: Supian M's background & journey |
| `about/BrandPhilosophy.vue` | Octopy ID Manifesto: The Octopus motif (multi-armed, precise, scalable) |
| `contact/ContactForm.vue` | Client inquiry form with validation |
| `contact/ContactInfo.vue` | Direct email, GitHub, LinkedIn, & availability status |

---

## 8. Page & Route Map

| Route | Layout | Page Component | Description |
|-------|--------|---------------|-------------|
| `/` | `default` | `pages/index.vue` | Homepage (Hero + Teaser sections) |
| `/about` | `default` | `pages/about.vue` | About Me & Octopy Brand Philosophy |
| `/contact` | `minimal` | `pages/contact.vue` | Dedicated Contact Form page |
| `/lab` | `default` | `pages/lab/index.vue` | OSS project listing with filter |
| `/insights` | `default` | `pages/insights/index.vue` | Blog post listing |
| `/insights/[slug]` | `blog` | `pages/insights/[slug].vue` | Blog post detail |
| `/services` | `minimal` | `pages/services/index.vue` | Services overview |
| `/services/linux` | `minimal` | `pages/services/linux.vue` | Linux Engineering pillar |
| `/services/mail` | `minimal` | `pages/services/mail.vue` | Mail Infrastructure pillar |
| `/services/app-dev` | `minimal` | `pages/services/app-dev.vue` | App Development pillar |

---

## 9. Content Architecture (@nuxt/content v3)

### `content.config.ts` (revised)

```typescript
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Blog posts
    insights: defineCollection({
      type: 'page',
      source: 'insights/**/*.md',
      schema: z.object({
        title:       z.string(),
        description: z.string(),
        date:        z.string(),
        tags:        z.array(z.string()).default([]),
        draft:       z.boolean().default(false),
        cover:       z.string().optional(),
        readTime:    z.number().optional(),
      }),
    }),

    // Lab / OSS projects
    lab: defineCollection({
      type: 'data',
      source: 'lab/**/*.md',
      schema: z.object({
        title:       z.string(),
        description: z.string(),
        repo:        z.string(),
        language:    z.enum(['Laravel', 'Go', 'Both']),
        tags:        z.array(z.string()).default([]),
        stars:       z.number().optional(),
        featured:    z.boolean().default(false),
        status:      z.enum(['active', 'maintenance', 'archived']).default('active'),
      }),
    }),
  },
})
```

### Blog Post Front-matter Convention

```yaml
---
title: "Building a Zero-Downtime Mail Server from Scratch"
description: "A production post-mortem on designing a self-hosted enterprise mail stack that handles 50k msg/day."
date: "2025-03-15"
tags: ["mail", "linux", "postfix", "dovecot", "devops"]
cover: "/og/mail-server-postmortem.jpg"
---
```

---

## 10. Homepage Copywriting Draft

### Hero Section

**Eyebrow** (small, monospace, accent):
```
// supian@octopy.dev
```

**Headline** (large, bold, gradient text):
```
Engineering with
Precision. Building
with Purpose.
```

**Sub-headline** (body, secondary color):
```
I'm Supian M — a full-stack engineer and the founder of Octopy ID.
I architect high-performance systems, build production-grade open-source tools,
and help engineering teams ship faster with cleaner foundations.
```

**CTA Primary:**
```
[ Explore My Work → ]
```

**CTA Secondary:**
```
[ Read the Blog ]
```

**Terminal-style status badge** (animated pulse):
```
● Available for consulting · Q3 2025
```

---

### Below-Hero Context Strip

```
Trusted by engineers across Indonesia and beyond.
Open Source. Battle-tested. Production-ready.

[ 12+ OSS Libraries ]   [ 8+ Years Engineering ]   [ Laravel · Go · Linux ]
```

---

## 11. Services Copywriting Draft

### Services Section (Homepage Teaser)

**Eyebrow:**
```
// services
```

**Section Headline:**
```
What I Build.
What I Fix.
What I Run.
```

**Sub-copy:**
```
Three focused disciplines. Zero bloat. Every engagement delivers
infrastructure that scales, mail that lands, and software that ships.
```

---

### Pillar 1 — Linux Server Engineering

> **Infrastructure That Doesn't Wake You Up at 3 AM.**

High-performance Linux server configuration, kernel tuning, and security hardening — built for load, not for labs. From bare-metal to cloud VMs, I design server stacks that are fast, auditable, and automated.

**Key deliverables:**
- Performance profiling & TCP/kernel-level tuning
- CIS-benchmark security hardening (automated via Ansible)
- Zero-downtime deployment pipelines (CI/CD on bare metal)
- Monitoring stack: Prometheus + Grafana + alerting
- Incident response runbooks & documentation

---

### Pillar 2 — Enterprise Mail Infrastructure

> **Your Own Mail Server. Enterprise-Grade. Actually Deliverable.**

Stop paying $12/mailbox/month. I design and deploy battle-hardened, self-hosted mail systems — Postfix + Dovecot + Rspamd — that pass every deliverability check, survive volume spikes, and give you full ownership of your communication infrastructure.

**Key deliverables:**
- Full stack: Postfix + Dovecot + Rspamd + DKIM/SPF/DMARC
- Deliverability tuning (inbox placement rate > 95%)
- Anti-spam & anti-abuse policy configuration
- Webmail (Roundcube/Snappymail) with LDAP/AD integration
- Monitoring, alerting, and quarterly health audits

---

### Pillar 3 — Scalable App Development

> **Software That Grows With Your Business, Not Against It.**

From clean-architecture Laravel APIs to high-throughput Go microservices, I build systems designed to evolve — not to be rewritten. Every line is intentional. Every boundary is explicit. Every abstraction earns its keep.

**Key deliverables:**
- Domain-Driven Design (DDD) with layered, modular Laravel architectures
- High-performance Go services (gRPC, REST, event-driven)
- API-first design with full OpenAPI specification
- Full test coverage strategy (unit → integration → contract)
- Code review, refactoring, and architectural audits for existing codebases

---

### Services Page CTA Block

> **Ready to Build Something That Lasts?**

I take a small number of high-value engagements at a time to ensure every client gets the full depth of my attention. If you have a complex problem that needs a precise solution — let's talk.

**[ Send me a message → ]**

*Response within 24 hours · No sales calls · Direct communication only*

---

## 12. SEO & Meta Strategy

### Global Defaults

```typescript
seo: {
  siteName: 'Octopy ID',
  siteDescription:
    'Supian M — Full-stack engineer, OSS builder, and founder of Octopy ID. Laravel, Go, Linux server engineering, and enterprise mail infrastructure.',
  siteUrl: 'https://octopy.dev',
  language: 'en',
  titleSeparator: '·',
  trailingSlash: false,
}
```

### Per-Page `useSeoMeta()` Pattern

```typescript
useSeoMeta({
  title: 'Linux Server Engineering',
  description:
    'High-performance Linux server tuning, CIS hardening, and automated deployment pipelines. Octopy ID.',
  ogImage: '/og/services-linux.jpg',
})
```

### OG Image Strategy
- Static pre-generated OG images in `/public/og/` for each key page
- Use `@nuxt/og-image` module for blog posts (auto-generated from front-matter title + date)

---

## 13. Tooling & DX Setup

### Bun Scripts

```json
{
  "scripts": {
    "dev":       "nuxt dev",
    "build":     "nuxt build",
    "generate":  "nuxt generate",
    "preview":   "nuxt preview",
    "lint":      "oxlint .",
    "lint:fix":  "oxlint . --fix",
    "typecheck": "nuxt typecheck"
  }
}
```

### Oxlint Configuration (`oxlint.json`)

```json
{
  "$schema": "https://raw.githubusercontent.com/oxc-project/oxc/main/crates/oxc_linter/schemas/oxlint.schema.json",
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn",
    "prefer-const": "error",
    "eqeqeq": "error"
  },
  "env": { "browser": true, "node": true },
  "ignorePatterns": ["node_modules/", ".nuxt/", "dist/", "public/"]
}
```

### VSCode / Cursor Settings (`.vscode/settings.json`)

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "Vue.volar",
  "editor.codeActionsOnSave": {
    "source.fixAll.oxc": "explicit"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.configFile": null
}
```

---

## 14. Execution Checklist

### Phase 1 — Foundation (Week 1)

- [ ] Install modules: `@nuxtjs/color-mode`, `@nuxt/image`, `@nuxt/icon`, `@nuxt/fonts`, `@vueuse/nuxt`, `@nuxtjs/seo`
- [ ] Install Tailwind CSS v4 + `@tailwindcss/vite`
- [ ] Set up `app/assets/css/main.css` with full `@theme` token definitions
- [ ] Configure `nuxt.config.ts` as per Section 4
- [ ] Update `content.config.ts` with typed collections (Section 9)
- [ ] Scaffold the full `app/` directory structure
- [ ] Set up `oxlint.json` and `tsconfig.json`

### Phase 2 — Core UI (Week 1–2)

- [ ] Build all `ui/` primitives: Button, Badge, Card, Tag, Divider
- [ ] Build `AppHeader.vue` with logo, nav links, mobile menu toggle
- [ ] Build `AppFooter.vue`
- [ ] Build `ThemeSwitcher.vue` + `useTheme.ts` composable
- [ ] Build `default.vue`, `blog.vue`, `minimal.vue` layouts
- [ ] Build `AppMobileMenu.vue` (full-screen overlay)

### Phase 3 — Homepage (Week 2)

- [ ] Build `HeroSection.vue` (headline, CTAs, animated motif)
- [ ] Build `TechStack.vue` (horizontal marquee/scroll)
- [ ] Build `FeaturedProjects.vue` (cards from Lab content)
- [ ] Build `ServicesTeaser.vue` (3-column pillar preview)
- [ ] Wire `pages/index.vue` with all sections

### Phase 4 — About Me (Week 2–3)

- [ ] Build `Timeline.vue` (work history, animated scroll reveal)
- [ ] Build `PrincipleCard.vue` (Clean Code · DDD · etc.)
- [ ] Build `StackGrid.vue` (all core technologies with icons)
- [ ] Build `PersonalStory.vue` and `BrandPhilosophy.vue`
- [ ] Wire `pages/about.vue`

### Phase 5 — The Lab (Week 3)

- [ ] Add 3–5 OSS project entries under `content/lab/`
- [ ] Build `ProjectCard.vue` with GitHub stats integration
- [ ] Build `GithubBadge.vue` (shields.io img integration)
- [ ] Build `PackageFilter.vue` (Laravel / Go / All)
- [ ] Wire `pages/lab/index.vue`

### Phase 6 — Insights Blog (Week 3–4)

- [ ] Write 2 seed blog posts under `content/insights/`
- [ ] Build `PostCard.vue` and `PostMeta.vue`
- [ ] Build `TableOfContents.vue` (from content headings)
- [ ] Style MDC prose in `assets/css/prose.css`
- [ ] Wire `pages/insights/index.vue` and `pages/insights/[slug].vue`

### Phase 7 — Services (Week 4)

- [ ] Build `PillarCard.vue` with icon, headline, feature list
- [ ] Build `FeatureList.vue`
- [ ] Build `ContactCTA.vue`
- [ ] Write final copy for all 3 service pages
- [ ] Wire all 4 services pages

### Phase 8 — Contact Form (Week 4)

- [ ] Build `ui/Input.vue` and `ui/Textarea.vue`
- [ ] Build `contact/ContactForm.vue` and `contact/ContactInfo.vue`
- [ ] Set up `server/api/contact.post.ts` handler
- [ ] Wire `pages/contact.vue`

### Phase 9 — Polish & SEO (Week 5)

- [ ] Per-page `useSeoMeta()` for all routes
- [ ] Generate OG images for all key pages
- [ ] Add `robots.txt` and sitemap via `@nuxtjs/seo`
- [ ] Accessibility audit (axe-core)
- [ ] Lighthouse score target: Performance ≥ 95, A11y ≥ 95
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] `nuxt generate` → deploy to Cloudflare Pages / Vercel

---

> **Tagline candidate:**  
> *"Built by one. Engineered for many."*

---

*Plan version: 1.0 · Author: Supian M / Antigravity · Last updated: 2026-07-04*
