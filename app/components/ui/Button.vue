<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'ghost' | 'outline' | 'link'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  icon?: string
}>()
</script>

<template>
  <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-bg">
    <slot />
  </button>
</template>
