<script setup lang="ts">
const techCategories = [
  {
    name: 'Infrastructure & Ops',
    items: ['Linux', 'Docker', 'Nginx', 'Postfix', 'Dovecot', 'Bash'],
  },
  {
    name: 'Backend & Data',
    items: ['Go', 'Laravel', 'PHP', 'PostgreSQL', 'Redis', 'MySQL'],
  },
  {
    name: 'Frontend & UI',
    items: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'TypeScript', 'Vite'],
  },
];
</script>

<template>
  <section class="border-y border-border bg-surface-raised py-16 md:py-24">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h3 class="mb-12 text-center text-2xl font-bold text-text-primary">Core Stack</h3>

      <div class="grid gap-8 md:grid-cols-3">
        <div v-for="category in techCategories" :key="category.name" class="flex flex-col">
          <h4
            class="mb-6 border-b border-border pb-2 text-sm font-semibold tracking-wider text-text-muted uppercase"
          >
            {{ category.name }}
          </h4>
          <div class="flex flex-wrap gap-2">
            <UiTag v-for="item in category.items" :key="item" class="px-3 py-1 text-sm">
              {{ item }}
            </UiTag>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
