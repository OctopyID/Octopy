<script setup lang="ts">
const techCategories = [
  {
    name: 'Infrastructure & Ops',
    items: ['Linux', 'Docker', 'Nginx', 'Postfix', 'Dovecot', 'Bash']
  },
  {
    name: 'Backend & Data',
    items: ['Go', 'Laravel', 'PHP', 'PostgreSQL', 'Redis', 'MySQL']
  },
  {
    name: 'Frontend & UI',
    items: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'TypeScript', 'Vite']
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-surface-raised border-y border-border">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-2xl font-bold text-text-primary mb-12 text-center">Core Stack</h3>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="category in techCategories" :key="category.name" class="flex flex-col">
          <h4 class="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6 pb-2 border-b border-border">
            {{ category.name }}
          </h4>
          <div class="flex flex-wrap gap-2">
            <UiTag v-for="item in category.items" :key="item" class="text-sm py-1 px-3">
              {{ item }}
            </UiTag>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
