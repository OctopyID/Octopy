<script setup lang="ts">
// HeroSection component
</script>

<template>
  <section class="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
    <!-- Subtle glow background effect -->
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-950)_0%,_transparent_70%)] opacity-50 dark:opacity-100"
    ></div>

    <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <!-- Animated Tagline -->
      <div
        class="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-3 py-1 text-sm font-medium text-text-secondary"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      >
        <span class="flex h-2 w-2 animate-pulse rounded-full bg-primary-500"></span>
        Architecting the Foundation
      </div>

      <!-- High-contrast Headline -->
      <h1
        class="mb-6 text-5xl leading-tight font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
      >
        Building <span class="text-gradient-primary">Scalable</span> <br class="hidden sm:block" />
        Infrastructure & Code
      </h1>

      <!-- Sub-copy -->
      <p
        class="mx-auto mt-4 mb-10 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
      >
        I am Supian M, the engineer behind Octopy ID. I design, build, and scale high-performance
        Linux servers, enterprise mail systems, and robust web applications.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <NuxtLink
          to="/lab"
          class="inline-flex h-11 items-center justify-center rounded-md bg-primary-500 px-8 text-sm font-medium text-white shadow-glow transition-colors hover:bg-primary-600 focus-visible:ring-2 focus-visible:ring-interactive focus-visible:outline-none disabled:opacity-50"
        >
          View Projects
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="inline-flex h-11 items-center justify-center rounded-md border border-border bg-surface-raised px-8 text-sm font-medium text-text-primary transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-interactive focus-visible:outline-none disabled:opacity-50"
        >
          Explore Services
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
