<script setup lang="ts">
// Placeholder projects until Content v3 is fully populated
const projects = [
  {
    title: 'Laravel Octane Boilerplate',
    description: 'High-performance starting point for Laravel applications using Swoole.',
    tags: ['Laravel', 'Swoole', 'Docker'],
    repo: 'octopy-id/laravel-octane'
  },
  {
    title: 'Go Mail Router',
    description: 'Blazing fast postfix policy daemon and mail router written in Go.',
    tags: ['Go', 'Postfix', 'SMTP'],
    repo: 'octopy-id/go-mail-router'
  },
  {
    title: 'Nuxt 4 Starter',
    description: 'Minimalist, utility-first Nuxt 4 template with Tailwind CSS v4.',
    tags: ['Nuxt', 'Vue', 'Tailwind'],
    repo: 'octopy-id/nuxt-starter'
  }
]
</script>

<template>
  <section class="py-24 bg-bg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-text-primary">From The Lab</h2>
          <p class="mt-2 text-text-muted">Open source contributions and engineering experiments.</p>
        </div>
        <NuxtLink to="/lab" class="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors">
          View all projects <Icon name="ph:arrow-right-bold" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UiCard v-for="project in projects" :key="project.repo" class="flex flex-col h-full p-6 hover:border-interactive transition-colors group">
          <div class="flex-grow">
            <div class="flex items-center gap-2 mb-4">
              <Icon name="ph:folder-open-duotone" class="text-primary-500" size="24" />
              <h3 class="font-semibold text-lg text-text-primary group-hover:text-primary-500 transition-colors">{{ project.title }}</h3>
            </div>
            <p class="text-sm text-text-secondary mb-6">{{ project.description }}</p>
          </div>
          
          <div class="mt-auto">
            <div class="flex flex-wrap gap-2 mb-4">
              <UiTag v-for="tag in project.tags" :key="tag">{{ tag }}</UiTag>
            </div>
            <div class="flex items-center justify-between text-xs text-text-muted border-t border-border pt-4">
              <span class="flex items-center gap-1 font-mono">
                <Icon name="mdi:github" size="16" />
                {{ project.repo }}
              </span>
            </div>
          </div>
        </UiCard>
      </div>
      
      <div class="mt-8 text-center sm:hidden">
        <NuxtLink to="/lab" class="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors">
          View all projects <Icon name="ph:arrow-right-bold" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
