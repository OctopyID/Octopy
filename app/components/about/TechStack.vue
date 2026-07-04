<script setup lang="ts">
const stackGroups = [
  {
    category: 'Languages & Frameworks',
    items: [
      { label: 'PHP', icon: 'logos:php' },
      { label: 'Laravel', icon: 'logos:laravel' },
      { label: 'TypeScript', icon: 'logos:typescript-icon' },
      { label: 'Vue.js', icon: 'logos:vue' },
      { label: 'Astro', icon: 'vscode-icons:file-type-astro' },
      { label: 'Node.js', icon: 'logos:nodejs-icon' },
    ],
  },
  {
    category: 'Cross-Platform',
    items: [
      { label: 'Electron', icon: 'logos:electron' },
      { label: 'Flutter', icon: 'logos:flutter' },
    ],
  },
  {
    category: 'DevOps & Servers',
    items: [
      { label: 'Ubuntu', icon: 'logos:ubuntu' },
      { label: 'Docker', icon: 'logos:docker-icon' },
      { label: 'Nginx', icon: 'logos:nginx' },
      { label: 'Apache', icon: 'logos:apache' },
    ],
  },
  {
    category: 'Databases & Tools',
    items: [
      { label: 'MySQL', icon: 'logos:mysql' },
      { label: 'Git', icon: 'logos:git-icon' },
      { label: 'Cloudflare', icon: 'logos:cloudflare-icon' },
      { label: 'Grafana', icon: 'logos:grafana' },
      { label: 'ClickUp', icon: 'simple-icons:clickup', color: '#7B68EE' },
    ],
  },
];
</script>

<template>
  <section class="border-t border-border/50 bg-surface-raised py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        v-motion-slide-visible-once-bottom
      >
        <div>
          <div class="mb-4 flex items-center gap-3">
            <div class="h-px w-12 bg-primary-500"></div>
            <h2 class="text-xs font-bold tracking-widest text-primary-500 uppercase">
              The Arsenal
            </h2>
          </div>
          <h3 class="text-3xl font-extrabold text-text-primary md:text-4xl">Tech Stack</h3>
        </div>
        <p class="max-w-xs text-sm leading-relaxed text-text-secondary">
          A curated list of tools and technologies I use to build robust and scalable systems.
        </p>
      </div>

      <div class="grid gap-12">
        <div v-for="group in stackGroups" :key="group.category" v-motion-slide-visible-once-bottom>
          <h4
            class="mb-6 border-b border-border/50 pb-2 text-sm font-bold tracking-wider text-text-primary uppercase"
          >
            {{ group.category }}
          </h4>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div
              v-for="item in group.items"
              :key="item.label"
              class="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-glow"
            >
              <Icon
                :name="item.icon"
                size="36"
                :class="
                  item.color ? '' : 'grayscale transition-all duration-300 group-hover:grayscale-0'
                "
                :style="item.color ? `color: ${item.color}` : ''"
              />
              <span
                class="text-xs font-semibold tracking-wide text-text-secondary transition-colors group-hover:text-primary-500"
              >
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
