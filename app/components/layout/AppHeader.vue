<script setup lang="ts">
// AppHeader
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full flex-none bg-bg/70 backdrop-blur-md transition-colors duration-500 lg:z-50 lg:border-b lg:border-border/50"
  >
    <UiContainer>
      <div class="border-b border-border py-4 lg:border-0">
        <div class="relative flex items-center">
          <NuxtLink to="/" class="mr-3 flex-none overflow-hidden text-lg font-bold md:w-auto">
            Octopy<span class="text-primary-500">ID</span>
          </NuxtLink>
          <div class="relative ml-auto hidden items-center lg:flex">
            <LayoutAppNav />
            <div class="ml-6 flex items-center border-l border-border pl-6">
              <ThemeSwitcher />
            </div>
          </div>
          <!-- Mobile Menu Toggle will go here -->
          <div class="ml-auto flex lg:hidden">
            <ThemeSwitcher class="mr-4" />
            <button class="text-text-secondary hover:text-text-primary">
              <Icon name="ph:list-bold" size="24" />
            </button>
          </div>
        </div>
      </div>
    </UiContainer>
  </header>
</template>
