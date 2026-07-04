<script setup lang="ts">
useSeoMeta({
  title: 'Scalable App Development | Octopy ID',
  description:
    'Full-stack application development utilizing modern paradigms with Nuxt, Vue, Go, and Laravel.',
});

const deliverables = [
  'Single Page Applications (SPA) with Vue 3',
  'Server-Side Rendered (SSR) sites with Nuxt 4',
  'RESTful APIs & Microservices with Go',
  'Robust Backend Systems with Laravel',
  'Relational Database Design (PostgreSQL)',
  'Third-party API Integrations',
];
</script>

<template>
  <ServicesServiceLayout
    title="Scalable App Development"
    subtitle="Crafting blazing-fast, modern web applications from the database schema up to the user interface."
    icon="ph:code-block-duotone"
    :deliverables="deliverables"
  >
    <p>
      I build software that doesn't just look good, but performs exceptionally under pressure. By
      leveraging the right tool for the job—whether it's the raw concurrency of Go, the rapid
      development cycle of Laravel, or the reactive brilliance of Vue & Nuxt—I deliver solutions
      that align with business goals.
    </p>
    <p>
      My full-stack approach means there's no disconnect between the frontend team and backend ops.
      I architect the API to perfectly serve the frontend, and design the frontend to gracefully
      handle the realities of the network.
    </p>
    <h3>Domain-Driven Design</h3>
    <p>
      I believe in structuring code around the business domain. This ensures that the codebase
      remains maintainable and extensible over years, preventing the dreaded "spaghetti code" trap
      that plagues scaling startups.
    </p>
  </ServicesServiceLayout>
</template>
