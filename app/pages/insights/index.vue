<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Insights | Octopy ID',
  description: 'Technical articles, architectural thoughts, and engineering reflections.'
})

const { data: articles } = await useAsyncData('insights-articles', () => {
  return queryCollection('insights')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <div class="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-16">
      <div class="flex items-center gap-3 mb-4">
        <div class="h-px bg-primary-500 w-8"></div>
        <h2 class="text-xs font-bold uppercase tracking-widest text-primary-500">The Blog</h2>
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6">Insights</h1>
      <p class="text-xl text-text-secondary leading-relaxed">
        Thoughts on software architecture, server infrastructure, and the daily grind of building reliable systems.
      </p>
    </div>

    <div v-if="articles && articles.length > 0" class="flex flex-col gap-6">
      <InsightsArticleCard 
        v-for="article in articles" 
        :key="article.path" 
        :article="article" 
      />
    </div>
    
    <div v-else class="py-20 text-center border border-dashed border-border rounded-xl">
      <Icon name="ph:article-duotone" size="48" class="text-text-muted mb-4 mx-auto" />
      <p class="text-text-secondary">No insights published yet. Check back soon.</p>
    </div>
  </div>
</template>
