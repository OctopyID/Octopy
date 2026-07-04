<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: 'Services | Octopy ID',
  description:
    'Holistic infrastructure and application engineering services. Linux, Mail, and App Development.',
});

const services = [
  {
    id: 'vue-electron',
    title: 'Vue & Electron Development',
    description:
      'Building modern, highly reactive single-page applications and cross-platform desktop software.',
    icon: 'simple-icons:vuedotjs',
  },
  {
    id: 'laravel',
    title: 'Laravel Development',
    description:
      'Crafting robust and secure backend systems, RESTful APIs, and full-stack web applications using the Laravel ecosystem.',
    icon: 'simple-icons:laravel',
  },
  {
    id: 'golang',
    title: 'Golang Development',
    description:
      'Developing high-performance, concurrent backend services, CLI tools, and scalable microservices with Go.',
    icon: 'simple-icons:go',
  },
  {
    id: 'linux',
    title: 'Linux Server Administration',
    description:
      'High-availability architecture, security hardening, and performance tuning for mission-critical infrastructure.',
    icon: 'simple-icons:linux',
  },
  {
    id: 'mail',
    title: 'Enterprise Mail Servers',
    description:
      'Deploying and managing robust self-hosted mail stacks (Mailcow, Poste.io) with strict SPF, DKIM, and DMARC configurations for ultimate deliverability.',
    icon: 'simple-icons:maildotru',
  },
  {
    id: 'docker',
    title: 'Docker & Containerization',
    description:
      'Containerizing applications for seamless deployment, orchestration, and continuous integration environments.',
    icon: 'simple-icons:docker',
  },
];
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
    <div class="mb-20 max-w-3xl">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-px w-8 bg-primary-500"></div>
        <h2 class="text-xs font-bold tracking-widest text-primary-500 uppercase">What I Do</h2>
      </div>
      <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
        Services & Expertise
      </h1>
      <p class="text-xl leading-relaxed text-text-secondary">
        I bridge the gap between raw infrastructure and elegant application logic, delivering
        end-to-end engineering solutions that are built to scale and endure.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="service in services"
        :key="service.id"
        class="group relative flex h-full flex-col rounded-2xl border border-border bg-surface-raised p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-glow"
      >
        <div
          class="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-bg text-primary-500 transition-transform group-hover:scale-110"
        >
          <Icon :name="service.icon" size="28" />
        </div>
        <h3 class="mb-4 text-xl font-bold text-text-primary">{{ service.title }}</h3>
        <p class="leading-relaxed text-text-secondary">{{ service.description }}</p>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="mt-24 rounded-3xl border border-primary-500/20 bg-primary-500/5 px-6 py-12 text-center sm:px-12 lg:px-16"
    >
      <h2 class="mb-4 text-3xl font-extrabold text-text-primary">
        Need a Custom Engineering Solution?
      </h2>
      <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
        Every business has unique requirements. Let's discuss your project, and I will architect a
        solution and provide a custom quotation tailored to your specific needs.
      </p>
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://wa.me/628159826697?text=Hello%20Supian,%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
        >
          <Icon name="simple-icons:whatsapp" size="20" />
          Chat on WhatsApp
        </a>
        <NuxtLink
          to="/contact"
          class="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-8 text-sm font-bold text-text-primary transition-all hover:-translate-y-1 hover:border-primary-500 hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
        >
          <Icon name="simple-icons:maildotru" size="20" />
          Send an Email
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
