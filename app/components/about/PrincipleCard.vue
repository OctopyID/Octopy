<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div
    class="group rounded-xl border border-border bg-bg p-6 transition-colors hover:border-interactive"
  >
    <div
      class="mb-4 flex h-10 w-10 items-center justify-center rounded border border-border bg-surface-raised text-text-secondary transition-colors group-hover:border-primary-500/30 group-hover:text-primary-500"
    >
      <Icon :name="icon" size="20" />
    </div>
    <h4 class="mb-2 font-bold text-text-primary">{{ title }}</h4>
    <p class="text-sm leading-relaxed text-text-secondary">{{ description }}</p>
  </div>
</template>
