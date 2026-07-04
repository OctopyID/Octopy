<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  icon: string;
  deliverables: string[];
}>();
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
    <!-- Breadcrumb & Header -->
    <header class="mb-16 border-b border-border pb-12">
      <NuxtLink
        to="/services"
        class="mb-10 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary-500"
      >
        <Icon name="ph:arrow-left-bold" /> All Services
      </NuxtLink>

      <div class="mb-6 flex items-center gap-4">
        <div
          class="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-surface-raised text-primary-500 shadow-sm"
        >
          <Icon :name="icon" size="36" />
        </div>
      </div>

      <h1
        class="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-text-primary md:text-6xl"
      >
        {{ title }}
      </h1>

      <p class="max-w-3xl text-xl leading-relaxed text-text-secondary md:text-2xl">
        {{ subtitle }}
      </p>
    </header>

    <!-- Main Content Slot -->
    <div
      class="prose-primary prose mb-16 max-w-none prose-invert prose-headings:text-text-primary prose-p:leading-relaxed prose-p:text-text-secondary prose-li:text-text-secondary"
    >
      <slot />
    </div>

    <!-- Deliverables -->
    <div class="mb-16 rounded-2xl border border-border bg-surface-raised p-8 md:p-12">
      <h3 class="mb-8 text-2xl font-bold text-text-primary">Key Deliverables</h3>
      <ul class="grid gap-6 md:grid-cols-2">
        <li v-for="item in deliverables" :key="item" class="flex items-start gap-3">
          <Icon name="ph:check-circle-fill" class="mt-1 shrink-0 text-primary-500" size="20" />
          <span class="font-medium text-text-secondary">{{ item }}</span>
        </li>
      </ul>
    </div>

    <!-- CTA -->
    <div class="text-center">
      <h3 class="mb-6 text-2xl font-bold text-text-primary">Ready to scale your infrastructure?</h3>
      <NuxtLink
        to="/contact"
        class="inline-flex h-12 items-center justify-center rounded-md bg-primary-500 px-8 text-sm font-medium text-white shadow-glow transition-colors hover:bg-primary-600"
      >
        Let's Talk
      </NuxtLink>
    </div>
  </div>
</template>
