<script setup lang="ts">
defineProps<{
  project: {
    id: string
    slug: string
    name: string
    description: string
    stars: number
    forks: number
    language: string
    url: string
  }
}>()
</script>

<template>
  <NuxtLink :to="`/lab/${project.slug}`" class="flex flex-col h-full p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300 group hover:shadow-md bg-surface-raised border border-border" v-motion-slide-visible-once-bottom>
    <div class="flex-grow">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <Icon name="ph:flask-duotone" class="text-primary-500" size="24" />
          <h3 class="font-bold text-lg text-text-primary group-hover:text-primary-500 transition-colors line-clamp-1">
            {{ project.name }}
          </h3>
        </div>
        <Icon name="ph:arrow-up-right-bold" size="18" class="text-text-muted group-hover:text-primary-500 transition-colors" />
      </div>
      
      <p class="text-sm text-text-secondary mb-6 line-clamp-3 leading-relaxed">
        {{ project.description }}
      </p>
    </div>
    
    <div class="mt-auto">
      <div class="flex items-center gap-5 pt-4 border-t border-border/50 text-xs text-text-muted font-mono">
        <span class="flex items-center gap-1.5" v-if="project.language">
          <Icon name="ph:code-duotone" size="16" />
          {{ project.language }}
        </span>
        <span class="flex items-center gap-1.5 text-primary-500 font-bold" v-if="project.stars > 0">
          <Icon name="ph:star-duotone" size="16" class="text-primary-500" />
          {{ project.stars }}
        </span>
        <span class="flex items-center gap-1.5" v-if="project.forks > 0">
          <Icon name="ph:git-fork-duotone" size="16" />
          {{ project.forks }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
