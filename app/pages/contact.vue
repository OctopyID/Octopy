<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: 'Contact | Octopy ID',
  description:
    'Get in touch with Supian M for infrastructure consulting and scalable app development.',
});

const socials = [
  {
    name: 'Email',
    url: 'mailto:supianidz@octopy.dev',
    icon: 'ph:envelope-duotone',
    handle: 'supianidz@octopy.dev',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/supianidz',
    icon: 'ph:github-logo-duotone',
    handle: '@supianidz',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/supianidz',
    icon: 'ph:linkedin-logo-duotone',
    handle: 'supianidz',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/supianidz',
    icon: 'ph:instagram-logo-duotone',
    handle: '@supianidz',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/supianidz',
    icon: 'ph:facebook-logo-duotone',
    handle: 'supianidz',
  },
  {
    name: 'Threads',
    url: 'https://threads.net/@supianidz',
    icon: 'ph:threads-logo-duotone',
    handle: '@supianidz',
  },
];
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
    <div class="mb-16 max-w-3xl">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-px w-8 bg-primary-500"></div>
        <h2 class="text-xs font-bold tracking-widest text-primary-500 uppercase">Get In Touch</h2>
      </div>
      <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
        Let's Build Together
      </h1>
      <p class="text-xl leading-relaxed text-text-secondary">
        Whether you need a robust Linux infrastructure, a custom mail server, or a full-stack
        application, I'm here to help you scale.
      </p>
    </div>

    <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
      <!-- Contact Info -->
      <div class="space-y-10 lg:col-span-5">
        <div class="prose-primary prose text-text-secondary prose-invert">
          <p>
            I am currently open for consulting, freelance projects, and exciting full-time
            opportunities. Drop a message using the form, or reach out directly via my professional
            networks.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-3 rounded-xl border border-border bg-surface-raised p-4 transition-all hover:border-primary-500/50 hover:shadow-sm"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg text-text-muted transition-colors group-hover:text-primary-500"
            >
              <Icon :name="social.icon" size="20" />
            </div>
            <div class="min-w-0 flex-1 overflow-hidden">
              <h4
                class="truncate text-sm font-medium text-text-primary transition-colors group-hover:text-primary-500"
              >
                {{ social.name }}
              </h4>
              <p class="truncate text-xs text-text-muted">{{ social.handle }}</p>
            </div>
          </a>
        </div>

        <div class="rounded-xl border border-primary-500/20 bg-primary-500/10 p-6">
          <h4 class="mb-2 flex items-center gap-2 font-bold text-primary-500">
            <Icon name="ph:map-pin-duotone" size="20" /> Based In
          </h4>
          <p class="text-text-secondary">
            Jakarta, Indonesia<br />
            <span class="text-sm text-text-muted"
              >Available for remote work worldwide (WIB/GMT+7)</span
            >
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="lg:sticky lg:top-28 lg:col-span-7 lg:self-start">
        <ContactForm />
      </div>
    </div>
  </div>
</template>
