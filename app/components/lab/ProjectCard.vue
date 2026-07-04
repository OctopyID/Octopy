<script setup lang="ts">
defineProps<{
  project: {
    id: string;
    slug: string;
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    url: string;
  };
}>();
</script>

<template>
  <NuxtLink
    :to="`/lab/${project.slug}`"
    class="group flex h-full flex-col rounded-xl border border-border bg-surface-raised p-6 transition-all duration-300 hover:border-primary-500/50 hover:shadow-md"
    v-motion-slide-visible-once-bottom
  >
    <div class="flex-grow">
      <div class="mb-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Icon name="ph:flask-duotone" class="text-primary-500" size="24" />
          <h3
            class="line-clamp-1 text-lg font-bold text-text-primary transition-colors group-hover:text-primary-500"
          >
            {{ project.name }}
          </h3>
        </div>
        <Icon
          name="ph:arrow-up-right-bold"
          size="18"
          class="text-text-muted transition-colors group-hover:text-primary-500"
        />
      </div>

      <p class="mb-6 line-clamp-3 text-sm leading-relaxed text-text-secondary">
        {{ project.description }}
      </p>
    </div>

    <div class="mt-auto">
      <div
        class="flex items-center gap-5 border-t border-border/50 pt-4 font-mono text-xs text-text-muted"
      >
        <span class="flex items-center gap-1.5" v-if="project.language">
          <Icon name="ph:code-duotone" size="16" />
          {{ project.language }}
        </span>
        <span class="flex items-center gap-1.5 font-bold text-primary-500" v-if="project.stars > 0">
          <Icon name="ph:star-duotone" size="16" class="text-primary-500" />
          {{ project.stars }}
        </span>
        <span class="flex items-center gap-1.5" v-if="project.forks > 0">
          <Icon name="ph:git-fork-duotone" size="16" />
          {{ project.forks }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
