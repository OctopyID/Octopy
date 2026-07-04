<script setup lang="ts">
defineProps<{
  article: {
    title: string;
    description?: string;
    date: string;
    tags?: string[];
    readTime?: number;
    path: string;
  };
}>();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};
</script>

<template>
  <NuxtLink :to="article.path" class="group block" v-motion-slide-visible-once-bottom>
    <article
      class="rounded-xl border border-border bg-surface-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-interactive hover:bg-surface hover:shadow-glow"
    >
      <div
        class="mb-4 flex items-center gap-4 text-xs font-medium tracking-wider text-text-muted uppercase"
      >
        <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        <span
          v-if="article.readTime"
          class="flex items-center gap-1 before:mr-3 before:content-['•']"
        >
          <Icon name="ph:clock-duotone" size="14" /> {{ article.readTime }} min read
        </span>
      </div>

      <h3
        class="mb-3 line-clamp-2 text-xl font-bold text-text-primary transition-colors group-hover:text-primary-500"
      >
        {{ article.title }}
      </h3>

      <p v-if="article.description" class="mb-6 line-clamp-3 leading-relaxed text-text-secondary">
        {{ article.description }}
      </p>

      <div class="mt-auto flex items-center justify-between">
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in article.tags" :key="tag" class="text-xs font-medium text-primary-500">
            #{{ tag }}
          </span>
        </div>
        <Icon
          name="ph:arrow-right-bold"
          class="text-text-muted transition-all group-hover:translate-x-1 group-hover:text-primary-500"
        />
      </div>
    </article>
  </NuxtLink>
</template>
