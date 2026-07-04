<script setup lang="ts">
const isMobileMenuOpen = ref(false);
const route = useRoute();

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu on route change
watch(
  () => route.fullPath,
  () => {
    isMobileMenuOpen.value = false;
  },
);

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Lab', path: '/lab' },
  { name: 'Insights', path: '/insights' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full flex-none bg-bg/70 backdrop-blur-md transition-colors duration-500 lg:border-b lg:border-border/50"
  >
    <UiContainer>
      <div class="border-b border-border py-4 lg:border-0">
        <div class="relative flex items-center">
          <NuxtLink to="/" class="mr-3 flex-none overflow-hidden text-lg font-bold md:w-auto">
            Octopy <span class="text-primary-500">ID</span>
          </NuxtLink>

          <!-- Desktop Nav -->
          <div class="relative ml-auto hidden items-center lg:flex">
            <LayoutAppNav />
            <div class="ml-6 flex items-center border-l border-border pl-6">
              <ThemeSwitcher />
            </div>
          </div>

          <!-- Mobile Menu Toggle -->
          <div class="ml-auto flex lg:hidden">
            <ThemeSwitcher class="mr-4" />
            <button
              @click="toggleMobileMenu"
              class="text-text-secondary transition-colors hover:text-text-primary focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <Icon :name="isMobileMenuOpen ? 'ph:x-bold' : 'ph:list-bold'" size="24" />
            </button>
          </div>
        </div>
      </div>
    </UiContainer>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute inset-x-0 top-full z-40 h-[calc(100vh-73px)] overflow-y-auto bg-bg/95 backdrop-blur-xl lg:hidden"
      >
        <nav class="flex flex-col gap-6 px-4 py-8 sm:px-6">
          <NuxtLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="text-2xl font-bold tracking-tight text-text-primary transition-colors hover:text-primary-500"
            active-class="text-primary-500"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>
