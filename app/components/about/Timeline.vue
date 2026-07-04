<script setup lang="ts">
const milestones = [
  {
    year: '2024 - Present',
    role: 'Independent Cloud & Infrastructure Architect',
    description: 'Consulting for enterprise clients, designing high-availability mail servers, and building scalable full-stack applications.'
  },
  {
    year: '2021 - 2024',
    role: 'Lead Systems Engineer',
    description: 'Managed a fleet of Linux servers, orchestrated zero-downtime migrations, and implemented comprehensive CI/CD pipelines.'
  },
  {
    year: '2018 - 2021',
    role: 'Full-Stack Developer',
    description: 'Built dynamic web applications primarily using Laravel and Vue.js. Deepened knowledge in database optimization and frontend architecture.'
  }
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl font-bold text-text-primary mb-12">The Journey</h3>
      
      <div class="space-y-12 border-l border-border pl-6 ml-3 relative">
        <div v-for="(milestone, i) in milestones" :key="i" class="relative group">
          <!-- Node -->
          <div class="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-border group-hover:bg-primary-500 transition-colors shadow-[0_0_0_4px_var(--color-bg)]"></div>
          
          <div class="mb-1 text-sm font-bold text-primary-500 font-mono tracking-wide">
            {{ milestone.year }}
          </div>
          <h4 class="text-lg font-semibold text-text-primary mb-2">
            {{ milestone.role }}
          </h4>
          <p class="text-text-secondary leading-relaxed">
            {{ milestone.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
