<script setup lang="ts">
// AppHeader
</script>

<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-border bg-bg/95 supports-backdrop-blur:bg-bg/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-4 border-b border-border lg:border-0">
        <div class="relative flex items-center">
          <NuxtLink to="/" class="mr-3 flex-none overflow-hidden md:w-auto text-lg font-bold">
            Octopy<span class="text-primary-500">ID</span>
          </NuxtLink>
          <div class="relative hidden lg:flex items-center ml-auto">
            <LayoutAppNav />
            <div class="flex items-center border-l border-border ml-6 pl-6">
              <ThemeSwitcher />
            </div>
          </div>
          <!-- Mobile Menu Toggle will go here -->
          <div class="flex lg:hidden ml-auto">
            <ThemeSwitcher class="mr-4" />
            <button class="text-text-secondary hover:text-text-primary">
              <Icon name="ph:list-bold" size="24" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
