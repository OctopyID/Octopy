<script setup lang="ts">
// AppMobileMenu state and logic
const isOpen = ref(false)
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm lg:hidden">
    <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
      <!-- Mobile menu content -->
    </div>
  </div>
</template>
