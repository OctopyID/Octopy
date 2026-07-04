<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'About | Octopy ID',
  description: 'Learn about Supian M, the architect and executor behind Octopy ID, and our core engineering philosophy.'
})

const principles = [
  {
    title: 'Domain-Driven Design',
    description: 'Structuring software around the core business domain for better maintainability and alignment with real-world problems.',
    icon: 'ph:bounding-box-duotone'
  },
  {
    title: 'High Availability',
    description: 'Designing resilient infrastructure with redundancy and failover mechanisms to ensure maximum uptime.',
    icon: 'ph:activity-duotone'
  },
  {
    title: 'Clean Code',
    description: 'Writing code that is readable, testable, and easily understandable by other engineers. Simplicity over cleverness.',
    icon: 'ph:code-simple-duotone'
  }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="pt-24 pb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-text-primary mb-4 tracking-tight">About</h1>
      <p class="text-xl text-text-muted">The mind and the machine.</p>
    </div>

    <!-- Components -->
    <AboutPersonalStory />
    <AboutBrandPhilosophy />
    
    <!-- Principles Section -->
    <section class="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl font-bold text-text-primary mb-12 text-center">Engineering Principles</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <AboutPrincipleCard 
          v-for="p in principles" 
          :key="p.title"
          :title="p.title"
          :description="p.description"
          :icon="p.icon"
        />
      </div>
    </section>

    <AboutStackGrid />
    <AboutTimeline />
  </div>
</template>
