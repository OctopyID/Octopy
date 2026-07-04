<template>
  <section class="border-y border-border bg-surface-raised py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 md:grid-cols-2">
        <div>
          <div class="mb-6 flex items-center gap-3">
            <div class="h-px w-12 bg-primary-500"></div>
            <h2 class="text-xs font-bold tracking-widest text-primary-500 uppercase">The Brand</h2>
          </div>

          <h3 class="mb-6 text-3xl font-extrabold text-text-primary">
            Octopy ID <br />
            <span class="text-text-secondary">The Manifesto</span>
          </h3>

          <p class="mb-6 text-lg leading-relaxed text-text-secondary">
            The Octopus motif symbolizes adaptability, intelligence, and the capability to handle
            complex, multi-faceted environments simultaneously.
          </p>
          <p class="text-lg leading-relaxed text-text-secondary">
            Like an octopus with its many arms, Octopy ID thrives in multi-disciplinary stacks.
            Whether it's managing Linux daemons, orchestrating Go routines, or crafting Vue
            interfaces, the core philosophy remains the same:
            <strong>Pragmatism, Maintainability, and Execution.</strong>
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
