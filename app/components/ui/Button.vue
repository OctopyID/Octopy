<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'ghost' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: string;
}>();
</script>

<template>
  <button
    class="focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-bg transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  >
    <slot />
  </button>
</template>
