<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()

const { data: project } = await useAsyncData(`lab-${route.path}`, () => {
  return queryCollection('lab').path(route.path).first()
})

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

useSeoMeta({
  title: `${project.value.title} | Octopy ID Lab`,
  description: project.value.description
})
</script>

<template>
  <article class="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Breadcrumb & Header -->
    <header class="mb-12 pb-8 border-b border-border">
      <NuxtLink to="/lab" class="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary-500 transition-colors mb-8">
        <Icon name="ph:arrow-left-bold" /> Back to Lab
      </NuxtLink>
      
      <div class="flex items-center gap-3 mb-4">
        <Icon name="ph:flask-duotone" class="text-primary-500" size="32" />
        <h1 class="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
          {{ project.title }}
        </h1>
      </div>
      
      <p class="text-xl text-text-secondary mb-6">{{ project.description }}</p>
      
      <div class="flex flex-wrap items-center gap-6 text-sm">
        <div class="flex items-center gap-2 text-text-muted">
          <Icon name="ph:code-duotone" size="18" />
          <span>{{ project.language }}</span>
        </div>
        <a :href="`https://github/${project.repo}`" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-text-muted hover:text-primary-500 transition-colors font-mono">
          <Icon name="ph:github-logo-duotone" size="18" />
          {{ project.repo }}
        </a>
      </div>
    </header>

    <!-- Markdown Content -->
    <div class="prose prose-invert prose-primary max-w-none prose-headings:text-text-primary prose-a:text-primary-500 hover:prose-a:text-primary-400 prose-code:text-primary-400 prose-code:bg-surface-raised prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-bg-subtle prose-pre:border prose-pre:border-border">
      <ContentRenderer v-if="project" :value="project" />
    </div>
    
  </article>
</template>
