<script setup lang="ts">
const techList = [
  { name: 'Linux', icon: 'mdi:linux' },
  { name: 'Go', icon: 'mdi:language-go' },
  { name: 'Laravel', icon: 'mdi:laravel' },
  { name: 'Vue.js', icon: 'mdi:vuejs' },
  { name: 'Nuxt', icon: 'mdi:nuxt' },
  { name: 'Docker', icon: 'mdi:docker' },
  { name: 'PostgreSQL', icon: 'mdi:database' },
  { name: 'Tailwind CSS', icon: 'mdi:tailwind' },
];
</script>

<template>
  <section class="overflow-hidden border-y border-border bg-bg-subtle py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="mb-8 text-center text-xs font-semibold tracking-widest text-text-muted uppercase">
        Battle-Tested Technologies
      </p>

      <!-- CSS Marquee approach -->
      <div class="group relative flex overflow-x-hidden">
        <div class="animate-marquee flex items-center space-x-12 whitespace-nowrap sm:space-x-24">
          <div
            v-for="tech in techList"
            :key="tech.name"
            class="flex items-center gap-3 text-text-secondary transition-colors hover:text-primary-500"
          >
            <Icon :name="tech.icon" size="32" />
            <span class="hidden text-lg font-medium sm:block">{{ tech.name }}</span>
          </div>
          <!-- Duplicate for seamless scrolling -->
          <div
            v-for="tech in techList"
            :key="tech.name + '-dup'"
            class="flex items-center gap-3 text-text-secondary transition-colors hover:text-primary-500"
          >
            <Icon :name="tech.icon" size="32" />
            <span class="hidden text-lg font-medium sm:block">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 25s linear infinite;
}
.group:hover .animate-marquee {
  animation-play-state: paused;
}
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
