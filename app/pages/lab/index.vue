<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'The Lab | Octopy ID',
  description: 'Open source experiments, boilerplates, and architectural case studies by Supian M.'
})

// Nuxt Content v3 querying
const { data: projects } = await useAsyncData('lab-projects', () => {
  return queryCollection('lab').all()
})
</script>

<template>
  <div class="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="max-w-3xl mb-16">
      <div class="flex items-center gap-3 mb-4">
        <div class="h-px bg-primary-500 w-8"></div>
        <h2 class="text-xs font-bold uppercase tracking-widest text-primary-500">Open Source & Experiments</h2>
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6">The Lab</h1>
      <p class="text-xl text-text-secondary leading-relaxed">
        A collection of boilerplates, tools, and architectural proofs-of-concept. 
        Built to solve real problems and shared to push the ecosystem forward.
      </p>
    </div>

    <!-- Grid -->
    <div v-if="projects && projects.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LabProjectCard 
        v-for="project in projects" 
        :key="project.path" 
        :project="project" 
      />
    </div>
    
    <div v-else class="py-20 text-center border border-dashed border-border rounded-xl">
      <Icon name="ph:flask-duotone" size="48" class="text-text-muted mb-4 mx-auto" />
      <p class="text-text-secondary">The lab is currently being set up. Check back later.</p>
    </div>
  </div>
</template>
