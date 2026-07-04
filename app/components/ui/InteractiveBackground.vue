<script setup lang="ts">
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-[-1] overflow-hidden hidden md:block">
    <div 
      class="absolute w-[600px] h-[600px] rounded-full blur-[100px] bg-primary-500/10 dark:bg-primary-500/5 transition-transform duration-700 ease-out will-change-transform"
      :style="{
        transform: `translate(${x - 300}px, ${y - 300}px)`
      }"
    ></div>
  </div>
</template>
