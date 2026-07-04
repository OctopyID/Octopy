<script setup lang="ts">
defineProps<{
  content: string;
  placement?: string;
}>();
</script>

<template>
  <div class="group relative inline-block">
    <slot />
    <div
      class="absolute z-50 hidden rounded border border-border bg-surface-raised px-2 py-1 text-xs whitespace-nowrap text-text-primary shadow-md group-hover:block"
    >
      {{ content }}
    </div>
  </div>
</template>
