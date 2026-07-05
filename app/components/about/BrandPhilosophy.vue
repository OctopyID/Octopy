<template>
  <section class="border-y border-border bg-surface-raised py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 md:grid-cols-2">
        <div>
          <div class="mb-6 flex items-center gap-3">
            <div class="h-px w-12 bg-primary-500"></div>
            <h2 class="text-xs font-bold tracking-widest text-primary-500 uppercase">The Brand</h2>
          </div>

          <h3 class="mb-6 text-3xl font-extrabold text-text-primary md:text-5xl">
            Octopy ID <br />
            <span
              class="mt-2 block text-xl font-bold tracking-tight text-text-secondary md:text-2xl"
              >The Manifesto</span
            >
          </h3>

          <p class="mb-6 text-lg leading-relaxed text-text-secondary">
            The octopus is a creature of high intelligence, adaptability, and decentralized control.
            It thrives in high-pressure environments by coordinating multiple complex systems
            seamlessly.
          </p>
          <p class="text-lg leading-relaxed text-text-secondary">
            This is the exact philosophy behind Octopy ID. Whether it is provisioning secure
            bare-metal Linux infrastructure, mitigating threats via Web Application Firewalls, or
            writing highly concurrent backend APIs, the objective is the same: to deliver resilient
            systems that adapt to scale.
          </p>
          <p class="mt-6 text-lg leading-relaxed text-text-secondary">
            We do not believe in hype-driven development. Our engineering decisions are guided by
            three uncompromising pillars:<br />
            <strong class="text-text-primary"
              >Pragmatic Architecture, Maintainable Code, and Flawless Execution.</strong
            >
          </p>
        </div>

        <div class="relative flex items-center justify-center p-8">
          <!-- Background Glow -->
          <div
            class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-500/20 blur-[80px]"
          ></div>

          <!-- Floating Tech Stack (The "Arms") -->
          <div class="relative z-10 grid grid-cols-2 gap-4 sm:gap-6">
            <div
              class="group flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/50 hover:bg-surface hover:shadow-glow sm:h-28 sm:w-28"
            >
              <Icon
                name="logos:linux-tux"
                size="40"
                class="opacity-70 transition-all duration-300 group-hover:opacity-100"
              />
              <span
                class="text-xs font-medium tracking-wide text-text-secondary group-hover:text-primary-500"
                >Linux</span
              >
            </div>
            <div
              class="group flex h-24 w-24 translate-y-6 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/50 hover:bg-surface hover:shadow-glow sm:h-28 sm:w-28 sm:translate-y-8"
            >
              <Icon
                name="logos:go"
                size="40"
                class="opacity-70 transition-all duration-300 group-hover:opacity-100"
              />
              <span
                class="text-xs font-medium tracking-wide text-text-secondary group-hover:text-primary-500"
                >Go</span
              >
            </div>
            <div
              class="group flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/50 hover:bg-surface hover:shadow-glow sm:h-28 sm:w-28"
            >
              <Icon
                name="logos:vue"
                size="40"
                class="opacity-70 transition-all duration-300 group-hover:opacity-100"
              />
              <span
                class="text-xs font-medium tracking-wide text-text-secondary group-hover:text-primary-500"
                >Vue</span
              >
            </div>
            <div
              class="group flex h-24 w-24 translate-y-6 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/50 hover:bg-surface hover:shadow-glow sm:h-28 sm:w-28 sm:translate-y-8"
            >
              <Icon
                name="logos:nuxt-icon"
                size="40"
                class="opacity-70 transition-all duration-300 group-hover:opacity-100"
              />
              <span
                class="text-xs font-medium tracking-wide text-text-secondary group-hover:text-primary-500"
                >Nuxt</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
