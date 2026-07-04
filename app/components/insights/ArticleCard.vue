<script setup lang="ts">
defineProps<{
  article: {
    title: string
    description?: string
    date: string
    tags?: string[]
    readTime?: number
    path: string
  }
}>()

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
}
</script>

<template>
  <NuxtLink :to="article.path" class="block group">
    <article class="p-6 rounded-xl border border-border bg-surface-raised hover:bg-surface hover:border-interactive transition-all duration-300">
      <div class="flex items-center gap-4 text-xs font-medium text-text-muted mb-4 uppercase tracking-wider">
        <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        <span v-if="article.readTime" class="flex items-center gap-1 before:content-['•'] before:mr-3">
          <Icon name="ph:clock-duotone" size="14" /> {{ article.readTime }} min read
        </span>
      </div>
      
      <h3 class="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
        {{ article.title }}
      </h3>
      
      <p v-if="article.description" class="text-text-secondary line-clamp-3 mb-6 leading-relaxed">
        {{ article.description }}
      </p>
      
      <div class="flex items-center justify-between mt-auto">
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in article.tags" :key="tag" class="text-xs font-medium text-primary-500">
            #{{ tag }}
          </span>
        </div>
        <Icon name="ph:arrow-right-bold" class="text-text-muted group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
      </div>
    </article>
  </NuxtLink>
</template>
