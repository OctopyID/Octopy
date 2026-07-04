<script setup lang="ts">
defineProps<{
  color?: string
}>()
</script>

<template>
  <span class="font-mono text-xs px-1.5 py-0.5 rounded bg-bg-subtle border border-border text-text-secondary">
    <slot />
  </span>
</template>
