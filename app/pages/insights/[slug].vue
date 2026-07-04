<script setup lang="ts">
definePageMeta({
  layout: 'blog'
})

const route = useRoute()

const { data: article } = await useAsyncData(`insights-${route.path}`, () => {
  return queryCollection('insights').path(route.path).first()
})

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

useSeoMeta({
  title: `${article.value.title} | Octopy ID Insights`,
  description: article.value.description || 'Octopy ID Insights'
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date)
}
</script>

<template>
  <article v-if="article" class="py-12 md:py-20">
    <header class="mb-12">
      <div class="flex items-center gap-4 text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
        <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        <span v-if="article.readTime" class="flex items-center gap-1 before:content-['•'] before:mr-3">
          <Icon name="ph:clock-duotone" size="16" /> {{ article.readTime }} min read
        </span>
      </div>
      
      <h1 class="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6 leading-tight">
        {{ article.title }}
      </h1>
      
      <div class="flex flex-wrap gap-2 mb-8">
        <span v-for="tag in article.tags" :key="tag" class="text-sm font-medium text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full">
          {{ tag }}
        </span>
      </div>
    </header>

    <div class="prose prose-invert prose-primary max-w-none prose-headings:text-text-primary prose-a:text-primary-500 hover:prose-a:text-primary-400 prose-code:text-primary-400 prose-code:bg-surface-raised prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-bg-subtle prose-pre:border prose-pre:border-border prose-p:text-text-secondary prose-p:leading-relaxed prose-li:text-text-secondary">
      <ContentRenderer :value="article" />
    </div>
  </article>
</template>
