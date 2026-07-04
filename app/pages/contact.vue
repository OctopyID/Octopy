<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Contact | Octopy ID',
  description: 'Get in touch with Supian M for infrastructure consulting and scalable app development.'
})

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/octopy-id',
    icon: 'ph:github-logo-duotone',
    handle: '@octopy-id'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/supian-m',
    icon: 'ph:linkedin-logo-duotone',
    handle: 'supian-m'
  },
  {
    name: 'Email',
    url: 'mailto:supian@octopy.id',
    icon: 'ph:envelope-duotone',
    handle: 'supian@octopy.id'
  }
]
</script>

<template>
  <div class="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-3xl mb-16">
      <div class="flex items-center gap-3 mb-4">
        <div class="h-px bg-primary-500 w-8"></div>
        <h2 class="text-xs font-bold uppercase tracking-widest text-primary-500">Get In Touch</h2>
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6">Let's Build Together</h1>
      <p class="text-xl text-text-secondary leading-relaxed">
        Whether you need a robust Linux infrastructure, a custom mail server, or a full-stack application, I'm here to help you scale.
      </p>
    </div>

    <div class="grid lg:grid-cols-12 gap-12 lg:gap-8">
      
      <!-- Contact Info -->
      <div class="lg:col-span-5 space-y-10">
        <div class="prose prose-invert prose-primary text-text-secondary">
          <p>
            I am currently open for consulting, freelance projects, and exciting full-time opportunities. Drop a message using the form, or reach out directly via my professional networks.
          </p>
        </div>
        
        <div class="space-y-6">
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface-raised hover:border-primary-500/50 hover:shadow-sm transition-all group"
          >
            <div class="w-12 h-12 rounded-lg bg-bg border border-border flex items-center justify-center text-text-muted group-hover:text-primary-500 transition-colors">
              <Icon :name="social.icon" size="24" />
            </div>
            <div>
              <h4 class="font-medium text-text-primary group-hover:text-primary-500 transition-colors">{{ social.name }}</h4>
              <p class="text-sm text-text-muted">{{ social.handle }}</p>
            </div>
          </a>
        </div>
        
        <div class="p-6 rounded-xl bg-primary-500/10 border border-primary-500/20">
          <h4 class="font-bold text-primary-500 mb-2 flex items-center gap-2">
            <Icon name="ph:map-pin-duotone" size="20" /> Based In
          </h4>
          <p class="text-text-secondary">
            Jakarta, Indonesia<br/>
            <span class="text-sm text-text-muted">Available for remote work worldwide (WIB/GMT+7)</span>
          </p>
        </div>
      </div>
      
      <!-- Contact Form -->
      <div class="lg:col-span-7">
        <ContactContactForm />
      </div>
      
    </div>
    
  </div>
</template>
