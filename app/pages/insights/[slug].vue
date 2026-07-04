<script setup lang="ts">
definePageMeta({
  layout: 'blog',
});

const route = useRoute();

const { data: article } = await useAsyncData(`insights-${route.path}`, () => {
  return queryCollection('insights').path(route.path).first();
});

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true });
}

useSeoMeta({
  title: `${article.value.title} | Octopy ID Insights`,
  description: article.value.description || 'Octopy ID Insights',
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};
</script>

<template>
  <article v-if="article" class="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
    <header class="mb-12">
      <div
        class="mb-6 flex items-center gap-4 text-sm font-medium tracking-wider text-text-muted uppercase"
      >
        <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        <span
          v-if="article.readTime"
          class="flex items-center gap-1 before:mr-3 before:content-['•']"
        >
          <Icon name="ph:clock-duotone" size="16" /> {{ article.readTime }} min read
        </span>
      </div>

      <h1
        class="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-text-primary md:text-5xl"
      >
        {{ article.title }}
      </h1>

      <div class="mb-8 flex flex-wrap gap-2">
        <span
          v-for="tag in article.tags"
          :key="tag"
          class="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-500"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <div
      class="prose max-w-none dark:prose-invert prose-p:leading-relaxed prose-a:text-primary-500 hover:prose-a:text-primary-600 dark:hover:prose-a:text-primary-400 prose-pre:border prose-pre:border-border prose-pre:!bg-surface-raised prose-pre:shadow-sm prose-img:rounded-xl"
    >
      <ContentRenderer :value="article" />
    </div>
  </article>
</template>
