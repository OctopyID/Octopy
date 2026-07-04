<script setup lang="ts">
defineProps<{
  color?: string;
}>();
</script>

<template>
  <span
    class="rounded border border-border bg-bg-subtle px-1.5 py-0.5 font-mono text-xs text-text-secondary"
  >
    <slot />
  </span>
</template>
