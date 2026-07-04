<script setup lang="ts">
const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Lab', path: '/lab' },
  { name: 'Insights', path: '/insights' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>

<template>
  <nav class="text-sm leading-6 font-semibold text-text-secondary">
    <ul class="flex space-x-8">
      <li v-for="link in links" :key="link.path">
        <NuxtLink :to="link.path" class="hover:text-primary-500 transition-colors">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
