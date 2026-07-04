<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: 'Insights | Octopy ID',
  description: 'Technical articles, architectural thoughts, and engineering reflections.',
});

const { data: articles } = await useAsyncData('insights-articles', () => {
  return queryCollection('insights').order('date', 'DESC').all();
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
    <div class="mb-16">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-px w-8 bg-primary-500"></div>
        <h2 class="text-xs font-bold tracking-widest text-primary-500 uppercase">The Blog</h2>
      </div>
      <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
        Insights
      </h1>
      <p class="text-xl leading-relaxed text-text-secondary">
        Thoughts on software architecture, server infrastructure, and the daily grind of building
        reliable systems.
      </p>
    </div>

    <div v-if="articles && articles.length > 0" class="flex flex-col gap-6">
      <InsightsArticleCard v-for="article in articles" :key="article.path" :article="article" />
    </div>

    <div v-else class="rounded-xl border border-dashed border-border py-20 text-center">
      <Icon name="ph:article-duotone" size="48" class="mx-auto mb-4 text-text-muted" />
      <p class="text-text-secondary">No insights published yet. Check back soon.</p>
    </div>
  </div>
</template>
