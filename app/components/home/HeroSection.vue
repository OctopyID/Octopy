<script setup lang="ts">
// HeroSection component
</script>

<template>
  <section class="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
    <!-- Subtle glow background effect -->
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-950)_0%,_transparent_70%)] opacity-50 dark:opacity-100"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Animated Tagline -->
      <div 
        class="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-surface-raised border border-border text-sm font-medium text-text-secondary"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      >
        <span class="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
        Architecting the Foundation
      </div>

      <!-- High-contrast Headline -->
      <h1 
        class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary mb-6 leading-tight"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
      >
        Building <span class="text-gradient-primary">Scalable</span> <br class="hidden sm:block" /> Infrastructure & Code
      </h1>

      <!-- Sub-copy -->
      <p 
        class="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-text-muted mb-10 leading-relaxed"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
      >
        I am Supian M, the engineer behind Octopy ID. I design, build, and scale high-performance Linux servers, enterprise mail systems, and robust web applications.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink to="/lab" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive disabled:opacity-50 h-11 px-8 bg-primary-500 text-white hover:bg-primary-600 shadow-glow">
          View Projects
        </NuxtLink>
        <NuxtLink to="/services" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive disabled:opacity-50 h-11 px-8 bg-surface-raised text-text-primary border border-border hover:bg-surface">
          Explore Services
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
