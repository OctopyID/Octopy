<script setup lang="ts">
const services = [
  {
    id: 'linux',
    title: 'Linux Server Engineering',
    description: 'High-availability architecture, security hardening, and performance tuning for mission-critical infrastructure.',
    icon: 'ph:terminal-window-duotone',
    path: '/services/linux'
  },
  {
    id: 'mail',
    title: 'Enterprise Mail Infrastructure',
    description: 'Deliverability-focused custom mail servers, Postfix/Dovecot optimization, and spam prevention systems.',
    icon: 'ph:envelope-simple-duotone',
    path: '/services/mail'
  },
  {
    id: 'app-dev',
    title: 'Scalable App Development',
    description: 'Full-stack application development utilizing modern paradigms with Nuxt, Vue, Go, and Laravel.',
    icon: 'ph:code-block-duotone',
    path: '/services/app-dev'
  }
]
</script>

<template>
  <section class="py-24 bg-surface-raised border-t border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-text-primary">Core Expertise</h2>
        <p class="mt-4 text-text-muted text-lg">
          Bridging the gap between raw infrastructure and elegant application logic. 
          I build systems designed to scale and endure.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" class="relative group p-8 rounded-2xl bg-bg border border-border hover:border-primary-500/50 transition-colors shadow-sm">
          <div class="w-12 h-12 rounded-lg bg-interactive-muted flex items-center justify-center mb-6 text-primary-500">
            <Icon :name="service.icon" size="28" />
          </div>
          <h3 class="text-xl font-bold text-text-primary mb-3">{{ service.title }}</h3>
          <p class="text-text-secondary text-sm leading-relaxed mb-8">{{ service.description }}</p>
          
          <NuxtLink :to="service.path" class="absolute bottom-8 left-8 flex items-center gap-2 text-sm font-semibold text-text-primary group-hover:text-primary-500 transition-colors">
            Learn more <Icon name="ph:arrow-right-bold" class="transition-transform group-hover:translate-x-1" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
