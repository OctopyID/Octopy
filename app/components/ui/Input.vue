<script setup lang="ts">
defineProps<{
  modelValue?: string | number;
  type?: string;
  placeholder?: string;
  error?: string;
}>();
</script>

<template>
  <input
    :type="type || 'text'"
    :placeholder="placeholder"
    class="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-text-muted focus:ring-2 focus:ring-interactive focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
  />
</template>
