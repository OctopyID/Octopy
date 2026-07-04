<script setup lang="ts">
defineProps<{
  content: string
  placement?: string
}>()
</script>

<template>
  <div class="relative inline-block group">
    <slot />
    <div class="absolute z-50 hidden group-hover:block bg-surface-raised text-text-primary text-xs rounded py-1 px-2 border border-border shadow-md whitespace-nowrap">
      {{ content }}
    </div>
  </div>
</template>
