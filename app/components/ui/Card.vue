<script setup lang="ts">
defineProps<{
  hoverable?: boolean;
  bordered?: boolean;
  glass?: boolean;
}>();
</script>

<template>
  <div
    class="rounded-lg border border-border bg-surface text-text-primary shadow-sm transition-all duration-300 ease-out"
    :class="{
      'hover:-translate-y-1 hover:border-interactive hover:bg-surface-raised hover:shadow-glow':
        hoverable,
      'glass': glass,
    }"
  >
    <slot />
  </div>
</template>
