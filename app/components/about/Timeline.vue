<script setup lang="ts">
const milestones = [
  {
    year: '2024 - Present',
    role: 'Independent Cloud & Infrastructure Architect',
    description:
      'Consulting for enterprise clients, designing high-availability mail servers, and building scalable full-stack applications.',
  },
  {
    year: '2021 - 2024',
    role: 'Lead Systems Engineer',
    description:
      'Managed a fleet of Linux servers, orchestrated zero-downtime migrations, and implemented comprehensive CI/CD pipelines.',
  },
  {
    year: '2018 - 2021',
    role: 'Full-Stack Developer',
    description:
      'Built dynamic web applications primarily using Laravel and Vue.js. Deepened knowledge in database optimization and frontend architecture.',
  },
];
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h3 class="mb-12 text-2xl font-bold text-text-primary">The Journey</h3>

      <div class="relative ml-3 space-y-12 border-l border-border pl-6">
        <div v-for="(milestone, i) in milestones" :key="i" class="group relative">
          <!-- Node -->
          <div
            class="absolute top-1.5 -left-[30px] h-3 w-3 rounded-full bg-border shadow-[0_0_0_4px_var(--color-bg)] transition-colors group-hover:bg-primary-500"
          ></div>

          <div class="mb-1 font-mono text-sm font-bold tracking-wide text-primary-500">
            {{ milestone.year }}
          </div>
          <h4 class="mb-2 text-lg font-semibold text-text-primary">
            {{ milestone.role }}
          </h4>
          <p class="leading-relaxed text-text-secondary">
            {{ milestone.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
