<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'The Lab | Octopy ID',
  description: 'Open source experiments and libraries by Supian M.'
})

const { data: projects, pending } = await useFetch('/api/github-projects')
</script>

<template>
  <div class="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mb-16" v-motion-slide-visible-once-bottom>
      <div class="flex items-center gap-3 mb-4">
        <div class="h-px bg-primary-500 w-8"></div>
        <h2 class="text-xs font-bold uppercase tracking-widest text-primary-500">Open Source & Libraries</h2>
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6">The Lab</h1>
      <p class="text-xl text-text-secondary leading-relaxed">
        A collection of open-source libraries and tools I've built to solve real-world engineering problems.
      </p>
    </div>

    <div v-if="pending" class="flex justify-center py-20">
      <Icon name="ph:spinner-gap-bold" size="32" class="animate-spin text-primary-500" />
    </div>

    <div v-else-if="projects && projects.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LabProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project" 
      />
    </div>
    
    <div v-else class="py-20 text-center border border-dashed border-border rounded-xl">
      <Icon name="ph:flask-duotone" size="48" class="text-text-muted mb-4 mx-auto" />
      <p class="text-text-secondary">Failed to fetch projects. Check GitHub API status.</p>
    </div>
  </div>
</template>
