<script setup lang="ts">
const { data: allProjects, pending } = await useFetch('/api/projects');
const projects = computed(() => (allProjects.value ? allProjects.value.slice(0, 3) : []));
</script>

<template>
  <section class="bg-bg py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 flex items-end justify-between">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-text-primary">From The Lab</h2>
          <p class="mt-2 text-text-muted">Open source contributions and engineering experiments.</p>
        </div>
        <NuxtLink
          to="/lab"
          class="hidden items-center gap-2 text-sm font-medium text-primary-500 transition-colors hover:text-primary-400 sm:inline-flex"
        >
          View all projects <Icon name="ph:arrow-right-bold" />
        </NuxtLink>
      </div>

      <div v-if="pending" class="flex justify-center py-20">
        <Icon name="ph:spinner-gap-bold" size="32" class="animate-spin text-primary-500" />
      </div>
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="project in projects"
          :key="project.id"
          :to="`/lab/${project.slug}`"
          class="group block h-full"
        >
          <UiCard class="flex h-full flex-col p-6 transition-colors group-hover:border-interactive">
            <div class="flex-grow">
              <div class="mb-4 flex items-center gap-2">
                <Icon name="ph:folder-open-duotone" class="text-primary-500" size="24" />
                <h3
                  class="text-lg font-semibold text-text-primary transition-colors group-hover:text-primary-500"
                >
                  {{ project.name }}
                </h3>
              </div>
              <p class="mb-6 text-sm text-text-secondary">{{ project.description }}</p>
            </div>

            <div class="mt-auto">
              <div class="mb-4 flex flex-wrap gap-2">
                <UiTag v-if="project.language">{{ project.language }}</UiTag>
                <UiTag
                  ><Icon name="ph:star-duotone" class="mr-1 inline-block" />{{
                    project.stars
                  }}</UiTag
                >
                <UiTag
                  ><Icon name="ph:git-fork-duotone" class="mr-1 inline-block" />{{
                    project.forks
                  }}</UiTag
                >
              </div>
              <div
                class="flex items-center justify-between border-t border-border pt-4 text-xs text-text-muted"
              >
                <span class="flex items-center gap-1 font-mono">
                  <Icon name="mdi:github" size="16" />
                  {{ project.id }}
                </span>
              </div>
            </div>
          </UiCard>
        </NuxtLink>
      </div>

      <div class="mt-8 text-center sm:hidden">
        <NuxtLink
          to="/lab"
          class="inline-flex items-center gap-2 text-sm font-medium text-primary-500 transition-colors hover:text-primary-400"
        >
          View all projects <Icon name="ph:arrow-right-bold" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
