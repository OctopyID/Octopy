<script setup lang="ts">
const { data: allProjects, pending } = await useFetch('/api/github-projects')
const projects = computed(() => allProjects.value ? allProjects.value.slice(0, 3) : [])
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

      <div v-if="pending" class="flex justify-center py-20">
        <Icon name="ph:spinner-gap-bold" size="32" class="animate-spin text-primary-500" />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink v-for="project in projects" :key="project.id" :to="`/lab/${project.slug}`" class="block h-full group">
          <UiCard class="flex flex-col h-full p-6 group-hover:border-interactive transition-colors">
            <div class="flex-grow">
              <div class="flex items-center gap-2 mb-4">
                <Icon name="ph:folder-open-duotone" class="text-primary-500" size="24" />
                <h3 class="font-semibold text-lg text-text-primary group-hover:text-primary-500 transition-colors">{{ project.name }}</h3>
              </div>
              <p class="text-sm text-text-secondary mb-6">{{ project.description }}</p>
            </div>
            
            <div class="mt-auto">
              <div class="flex flex-wrap gap-2 mb-4">
                <UiTag v-if="project.language">{{ project.language }}</UiTag>
                <UiTag><Icon name="ph:star-duotone" class="mr-1 inline-block" />{{ project.stars }}</UiTag>
                <UiTag><Icon name="ph:git-fork-duotone" class="mr-1 inline-block" />{{ project.forks }}</UiTag>
              </div>
              <div class="flex items-center justify-between text-xs text-text-muted border-t border-border pt-4">
                <span class="flex items-center gap-1 font-mono">
                  <Icon name="mdi:github" size="16" />
                  {{ project.id }}
                </span>
              </div>
            </div>
          </UiCard>
        </NuxtLink>
      </div>
      
      <div class="mt-8 text-center sm:hidden">
        <NuxtLink to="/lab" class="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors">
          View all projects <Icon name="ph:arrow-right-bold" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
