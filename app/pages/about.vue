<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: 'About | Octopy ID',
  description:
    'Learn about Supian M, the architect and executor behind Octopy ID, and our core engineering philosophy.',
});

const principles = [
  {
    title: 'Domain-Driven Design',
    description:
      'Structuring software around the core business domain for better maintainability and alignment with real-world problems.',
    icon: 'ph:bounding-box-duotone',
  },
  {
    title: 'High Availability',
    description:
      'Designing resilient infrastructure with redundancy and failover mechanisms to ensure maximum uptime.',
    icon: 'ph:activity-duotone',
  },
  {
    title: 'Clean Code',
    description:
      'Writing code that is readable, testable, and easily understandable by other engineers. Simplicity over cleverness.',
    icon: 'ph:code-simple-duotone',
  },
];
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="mx-auto max-w-4xl px-4 pt-24 pb-12 text-center sm:px-6 lg:px-8">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
        About
      </h1>
      <p class="text-xl text-text-muted">The mind and the machine.</p>
    </div>

    <!-- Components -->
    <AboutPersonalStory />
    <AboutBrandPhilosophy />
    <AboutWorkExperience />
    <AboutTechStack />

    <!-- Principles Section -->
    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <h3 class="mb-12 text-center text-2xl font-bold text-text-primary">Engineering Principles</h3>
      <div class="grid gap-6 md:grid-cols-3">
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
