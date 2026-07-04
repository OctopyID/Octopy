<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Services | Octopy ID',
  description: 'Holistic infrastructure and application engineering services. Linux, Mail, and App Development.'
})

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
  <div class="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-3xl mb-20">
      <div class="flex items-center gap-3 mb-4">
        <div class="h-px bg-primary-500 w-8"></div>
        <h2 class="text-xs font-bold uppercase tracking-widest text-primary-500">What I Do</h2>
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6">Services & Expertise</h1>
      <p class="text-xl text-text-secondary leading-relaxed">
        I bridge the gap between raw infrastructure and elegant application logic, delivering end-to-end engineering solutions that are built to scale and endure.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="service in services" :key="service.id" class="relative group p-8 rounded-2xl bg-surface-raised border border-border hover:border-primary-500/50 transition-colors shadow-sm flex flex-col h-full">
        <div class="w-14 h-14 rounded-xl bg-bg border border-border flex items-center justify-center mb-8 text-primary-500 group-hover:scale-110 transition-transform">
          <Icon :name="service.icon" size="32" />
        </div>
        <h3 class="text-2xl font-bold text-text-primary mb-4">{{ service.title }}</h3>
        <p class="text-text-secondary leading-relaxed mb-10 flex-grow">{{ service.description }}</p>
        
        <div class="mt-auto pt-6 border-t border-border/50">
          <NuxtLink :to="service.path" class="inline-flex items-center gap-2 font-semibold text-primary-500 hover:text-primary-400 transition-colors">
            View Details <Icon name="ph:arrow-right-bold" class="transition-transform group-hover:translate-x-1" />
          </NuxtLink>
        </div>
      </div>
    </div>
    
  </div>
</template>
