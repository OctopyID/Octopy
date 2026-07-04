<script setup lang="ts">
defineProps<{
  as?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}>();
</script>

<template>
  <component
    :is="as || 'div'"
    class="mx-auto px-4 sm:px-6 lg:px-8"
    :class="[
      size === 'sm' ? 'max-w-screen-sm' : '',
      size === 'md' ? 'max-w-screen-md' : '',
      size === 'lg' ? 'max-w-screen-lg' : '',
      size === 'xl' ? 'max-w-screen-xl' : '',
      size === '2xl' ? 'max-w-2xl' : '',
      size === '3xl' ? 'max-w-3xl' : '',
      size === '4xl' ? 'max-w-4xl' : '',
      size === '5xl' ? 'max-w-5xl' : '',
      size === '6xl' ? 'max-w-6xl' : '',
      size === '7xl' || !size ? 'max-w-7xl' : '',
    ]"
  >
    <slot />
  </component>
</template>
