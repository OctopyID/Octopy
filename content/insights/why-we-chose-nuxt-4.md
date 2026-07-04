---
title: Why We Chose Nuxt 4 for the Octopy ID Rewrite
description: Exploring the performance gains and developer experience improvements in the latest version of Nuxt.
date: 2024-04-02
tags:
  - Nuxt
  - Vue
  - Frontend Architecture
readTime: 5
---

# Why We Chose Nuxt 4 for the Octopy ID Rewrite

Rebuilding a portfolio isn't just about a fresh coat of paint; it's an opportunity to re-evaluate the technological foundation.

## The Vite and Tailwind v4 Synergy

One of the biggest pain points in previous frontend stacks was CSS compilation time. Tailwind CSS v4, integrated directly as a Vite plugin, completely changes the game. 

- **Zero Configuration**: No more `tailwind.config.js`. Everything is managed via CSS `@theme`.
- **Instant HMR**: Changes reflect in the browser instantly.

## Content Driven Design

By leveraging Nuxt Content v3, we treat our articles and case studies as database records, but we write them in Markdown. It's the perfect bridge between developer ergonomics and robust data fetching.
