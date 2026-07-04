<script setup lang="ts">
const route = useRoute()

const { data, error, pending } = await useAsyncData(`lab-detail-${route.params.slug}`, async () => {
  const projects = await $fetch('/api/github-projects')
  const project = projects.find(p => p.slug === route.params.slug)
  
  if (!project) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
  }

  let markdown = ''
  if (project.docs) {
    try {
      markdown = await $fetch<string>(project.docs)
    } catch (e) {
      markdown = '> Failed to load documentation from repository.'
    }
  } else {
    markdown = '> No documentation provided.'
  }

  return {
    project,
    markdown
  }
})

if (error.value) {
  throw createError(error.value)
}

useSeoMeta({
  title: () => `${data.value?.project.name || 'Project'} | Octopy ID Lab`,
  description: () => data.value?.project.description || 'Open source project by Supian M.'
})
</script>

<template>
  <div class="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div v-if="pending" class="flex justify-center py-20">
      <Icon name="ph:spinner-gap-bold" size="32" class="animate-spin text-primary-500" />
    </div>

    <article v-else-if="data" class="w-full">
      <header class="mb-12" v-if="data.project">
        <NuxtLink to="/lab" class="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors mb-8">
          <Icon name="ph:arrow-left-bold" /> Back to Lab
        </NuxtLink>

        <div class="flex items-center gap-4 text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
          <span v-if="data.project.language" class="flex items-center gap-1">
            <Icon name="ph:code-duotone" size="16" /> {{ data.project.language }}
          </span>
          <span class="flex items-center gap-1 text-primary-500">
            <Icon name="ph:star-duotone" size="16" /> {{ data.project.stars }}
          </span>
          <span class="flex items-center gap-1">
            <Icon name="ph:git-fork-duotone" size="16" /> {{ data.project.forks }}
          </span>
        </div>
        
        <h1 class="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6 leading-tight">
          {{ data.project.name }}
        </h1>
        
        <p class="text-xl text-text-secondary leading-relaxed mb-8">
          {{ data.project.description }}
        </p>

        <div class="flex gap-4">
          <a :href="data.project.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-bg font-semibold rounded-lg hover:bg-primary-500 transition-colors shadow-sm">
            <Icon name="mdi:github" size="20" /> View Repository
          </a>
        </div>
      </header>

      <div class="border-t border-border pt-12">
        <div class="prose dark:prose-invert max-w-none prose-img:rounded-xl prose-pre:!bg-surface-raised prose-pre:border prose-pre:border-border prose-pre:shadow-sm prose-p:leading-relaxed prose-a:text-primary-500 hover:prose-a:text-primary-600 dark:hover:prose-a:text-primary-400">
          <MDC :value="data.markdown" />
        </div>
      </div>
    </article>
  </div>
</template>
