<template>
  <section class="border-y border-border bg-surface-raised py-16 md:py-24">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
            <strong>Precision, Scalability, and Resilience.</strong>
          </p>
        </div>

        <div class="relative flex items-center justify-center p-8">
          <!-- Abstract Octopus Motif -->
          <div
            class="absolute h-48 w-48 animate-pulse rounded-full bg-[radial-gradient(ellipse_at_center,_var(--color-primary-500)_0%,_transparent_70%)] opacity-30 blur-2xl"
          ></div>
          <Icon
            name="ph:tentacle-duotone"
            class="relative z-10 text-primary-500 opacity-80"
            size="140"
          />
        </div>
      </div>
    </div>
  </section>
</template>
