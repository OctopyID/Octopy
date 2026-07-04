<script setup lang="ts">
defineProps<{
  project: {
    title: string
    description: string
    repo: string
    tags?: string[]
    path: string
  }
}>()
</script>

<template>
  <UiCard class="flex flex-col h-full p-6 hover:border-primary-500/50 transition-all duration-300 group hover:shadow-md hover:-translate-y-1 bg-surface-raised border border-border">
    <div class="flex-grow">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <Icon name="ph:flask-duotone" class="text-primary-500" size="24" />
          <h3 class="font-bold text-lg text-text-primary group-hover:text-primary-500 transition-colors line-clamp-1">
            {{ project.title }}
          </h3>
        </div>
        <NuxtLink :to="project.path" class="text-text-muted hover:text-primary-500 transition-colors" aria-label="View project details">
          <Icon name="ph:arrow-up-right-bold" size="18" />
        </NuxtLink>
      </div>
      
      <p class="text-sm text-text-secondary mb-6 line-clamp-3 leading-relaxed">
        {{ project.description }}
      </p>
    </div>
    
    <div class="mt-auto">
      <div class="flex flex-wrap gap-2 mb-5">
        <UiTag v-for="tag in project.tags" :key="tag" class="text-xs py-0.5 px-2">
          {{ tag }}
        </UiTag>
      </div>
      
      <div class="flex items-center justify-between pt-4 border-t border-border/50 text-xs text-text-muted">
        <span class="flex items-center gap-1.5 font-mono">
          <Icon name="ph:github-logo-duotone" size="16" />
          {{ project.repo }}
        </span>
        <NuxtLink :to="project.path" class="font-medium text-primary-500 hover:text-primary-400 group-hover:underline">
          Read More
        </NuxtLink>
      </div>
    </div>
  </UiCard>
</template>
