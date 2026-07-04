<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  icon: string
  deliverables: string[]
}>()
</script>

<template>
  <div class="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Breadcrumb & Header -->
    <header class="mb-16 pb-12 border-b border-border">
      <NuxtLink to="/services" class="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary-500 transition-colors mb-10">
        <Icon name="ph:arrow-left-bold" /> All Services
      </NuxtLink>
      
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 rounded-xl bg-surface-raised border border-border flex items-center justify-center text-primary-500 shadow-sm">
          <Icon :name="icon" size="36" />
        </div>
      </div>
      
      <h1 class="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight mb-6 leading-tight">
        {{ title }}
      </h1>
      
      <p class="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
        {{ subtitle }}
      </p>
    </header>

    <!-- Main Content Slot -->
    <div class="prose prose-invert prose-primary max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-li:text-text-secondary mb-16">
      <slot />
    </div>
    
    <!-- Deliverables -->
    <div class="bg-surface-raised border border-border rounded-2xl p-8 md:p-12 mb-16">
      <h3 class="text-2xl font-bold text-text-primary mb-8">Key Deliverables</h3>
      <ul class="grid md:grid-cols-2 gap-6">
        <li v-for="item in deliverables" :key="item" class="flex items-start gap-3">
          <Icon name="ph:check-circle-fill" class="text-primary-500 mt-1 shrink-0" size="20" />
          <span class="text-text-secondary font-medium">{{ item }}</span>
        </li>
      </ul>
    </div>
    
    <!-- CTA -->
    <div class="text-center">
      <h3 class="text-2xl font-bold text-text-primary mb-6">Ready to scale your infrastructure?</h3>
      <NuxtLink to="/contact" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-12 px-8 bg-primary-500 text-white hover:bg-primary-600 shadow-glow">
        Let's Talk
      </NuxtLink>
    </div>
    
  </div>
</template>
