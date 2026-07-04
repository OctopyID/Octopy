<script setup lang="ts">
const services = [
  {
    id: 'linux',
    title: 'Linux Server Engineering',
    description:
      'High-availability architecture, security hardening, and performance tuning for mission-critical infrastructure.',
    icon: 'ph:terminal-window-duotone',
    path: '/services/linux',
  },
  {
    id: 'mail',
    title: 'Enterprise Mail Servers',
    description:
      'Deploying and managing robust self-hosted mail stacks (Mailcow, Poste.io) with strict SPF, DKIM, and DMARC configurations.',
    icon: 'ph:envelope-simple-duotone',
    path: '/services/mail',
  },
  {
    id: 'app-dev',
    title: 'Scalable App Development',
    description:
      'Full-stack application development utilizing modern paradigms with Nuxt, Vue, Go, and Laravel.',
    icon: 'ph:code-block-duotone',
    path: '/services/app-dev',
  },
];
</script>

<template>
  <section class="border-t border-border bg-surface-raised py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-text-primary">Core Expertise</h2>
        <p class="mt-4 text-lg text-text-muted">
          From configuring the bare metal to writing the application logic. I build systems that are
          straightforward to maintain and built to last.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.id"
          class="group relative rounded-2xl border border-border bg-bg p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-glow"
        >
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-interactive-muted text-primary-500"
          >
            <Icon :name="service.icon" size="28" />
          </div>
          <h3 class="mb-3 text-xl font-bold text-text-primary">{{ service.title }}</h3>
          <p class="mb-8 text-sm leading-relaxed text-text-secondary">{{ service.description }}</p>

          <!-- Removed NuxtLink -->
        </div>
      </div>

      <div class="mt-16 flex justify-center">
        <NuxtLink
          to="/services"
          class="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-surface px-8 text-sm font-semibold text-text-primary transition-all hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-500 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
        >
          Explore All Expertise
          <Icon name="ph:arrow-right-bold" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
