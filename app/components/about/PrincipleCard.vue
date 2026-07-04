<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <div class="p-6 rounded-xl border border-border bg-bg hover:border-interactive transition-colors group">
    <div class="w-10 h-10 rounded bg-surface-raised border border-border flex items-center justify-center mb-4 text-text-secondary group-hover:text-primary-500 group-hover:border-primary-500/30 transition-colors">
      <Icon :name="icon" size="20" />
    </div>
    <h4 class="font-bold text-text-primary mb-2">{{ title }}</h4>
    <p class="text-sm text-text-secondary leading-relaxed">{{ description }}</p>
  </div>
</template>
