<script setup lang="ts">
defineProps<{
  variant?: 'brand' | 'neutral' | 'success' | 'warning';
  size?: 'sm' | 'md';
}>();
</script>

<template>
  <span
    class="focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
  >
    <slot />
  </span>
</template>
