<script setup lang="ts">
defineProps<{
  hoverable?: boolean;
  bordered?: boolean;
  glass?: boolean;
}>();
</script>

<template>
  <div class="rounded-lg border bg-surface text-text-primary shadow-sm">
    <slot />
  </div>
</template>
