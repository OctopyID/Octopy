<script setup lang="ts">
defineProps<{
  label?: string;
  orientation?: 'horizontal' | 'vertical';
}>();
</script>

<template>
  <div
    class="shrink-0 bg-border"
    :class="orientation === 'vertical' ? 'h-full w-[1px]' : 'h-[1px] w-full'"
  />
</template>
