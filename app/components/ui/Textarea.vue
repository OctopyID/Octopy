<script setup lang="ts">
defineProps<{
  modelValue?: string;
  rows?: number;
  placeholder?: string;
  error?: string;
}>();
</script>

<template>
  <textarea
    :rows="rows || 3"
    :placeholder="placeholder"
    class="flex min-h-[80px] w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-text-muted focus:ring-2 focus:ring-interactive focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
  ></textarea>
</template>
