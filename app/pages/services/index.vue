<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: 'Services | Octopy ID',
  description:
    'Holistic infrastructure and application engineering services. Linux, Mail, and App Development.',
});

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
    title: 'Enterprise Mail Infrastructure',
    description:
      'Deliverability-focused custom mail servers, Postfix/Dovecot optimization, and spam prevention systems.',
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
  <div class="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
    <div class="mb-20 max-w-3xl">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-px w-8 bg-primary-500"></div>
        <h2 class="text-xs font-bold tracking-widest text-primary-500 uppercase">What I Do</h2>
      </div>
      <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
        Services & Expertise
      </h1>
      <p class="text-xl leading-relaxed text-text-secondary">
        I bridge the gap between raw infrastructure and elegant application logic, delivering
        end-to-end engineering solutions that are built to scale and endure.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div
        v-for="service in services"
        :key="service.id"
        class="group relative flex h-full flex-col rounded-2xl border border-border bg-surface-raised p-8 shadow-sm transition-colors hover:border-primary-500/50"
      >
        <div
          class="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-bg text-primary-500 transition-transform group-hover:scale-110"
        >
          <Icon :name="service.icon" size="32" />
        </div>
        <h3 class="mb-4 text-2xl font-bold text-text-primary">{{ service.title }}</h3>
        <p class="mb-10 flex-grow leading-relaxed text-text-secondary">{{ service.description }}</p>

        <div class="mt-auto border-t border-border/50 pt-6">
          <NuxtLink
            :to="service.path"
            class="inline-flex items-center gap-2 font-semibold text-primary-500 transition-colors hover:text-primary-400"
          >
            View Details
            <Icon
              name="ph:arrow-right-bold"
              class="transition-transform group-hover:translate-x-1"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
