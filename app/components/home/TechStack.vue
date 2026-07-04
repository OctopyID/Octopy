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
]
</script>

<template>
  <section class="py-10 border-y border-border bg-bg-subtle overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-center text-xs font-semibold text-text-muted tracking-widest uppercase mb-8">
        Battle-Tested Technologies
      </p>
      
      <!-- CSS Marquee approach -->
      <div class="relative flex overflow-x-hidden group">
        <div class="animate-marquee flex whitespace-nowrap items-center space-x-12 sm:space-x-24">
          <div v-for="tech in techList" :key="tech.name" class="flex items-center gap-3 text-text-secondary hover:text-primary-500 transition-colors">
            <Icon :name="tech.icon" size="32" />
            <span class="font-medium text-lg hidden sm:block">{{ tech.name }}</span>
          </div>
          <!-- Duplicate for seamless scrolling -->
          <div v-for="tech in techList" :key="tech.name + '-dup'" class="flex items-center gap-3 text-text-secondary hover:text-primary-500 transition-colors">
            <Icon :name="tech.icon" size="32" />
            <span class="font-medium text-lg hidden sm:block">{{ tech.name }}</span>
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
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
</style>
