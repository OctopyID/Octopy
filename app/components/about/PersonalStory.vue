<template>
  <section class="py-16 md:py-24">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-12 gap-12 items-center">
        <!-- Text -->
        <div class="md:col-span-7">
          <div class="flex items-center gap-3 mb-6">
            <div class="h-px bg-primary-500 w-12"></div>
            <h2 class="text-xs font-bold uppercase tracking-widest text-primary-500">The Person</h2>
          </div>
          
          <h3 class="text-3xl md:text-5xl font-extrabold text-text-primary mb-8 leading-tight">
            Supian M. <br />
            <span class="text-text-secondary">Architect & Executor.</span>
          </h3>
          
          <div class="prose prose-invert max-w-none text-text-secondary text-lg leading-relaxed">
            <p class="mb-6">
              I am a battle-tested engineer who believes in shipping robust, scalable, and maintainable systems. My approach is direct, transparent, and entirely execution-oriented—no bullshit, just engineering excellence.
            </p>
            <p>
              Over the years, I've traversed the full stack, from tweaking kernel parameters on bare-metal Linux servers to architecting distributed enterprise mail infrastructures and building lightning-fast web applications. 
              When I take on a project, I own it from the DNS records down to the CSS utilities.
            </p>
          </div>
        </div>

        <!-- Image -->
        <div class="md:col-span-5 relative mt-8 md:mt-0">
          <div class="absolute inset-0 bg-primary-500/10 rounded-2xl transform translate-x-4 translate-y-4 border border-primary-500/20"></div>
          <NuxtImg 
            src="/images/portrait.webp" 
            alt="Supian M Portrait" 
            class="relative rounded-2xl w-full object-cover shadow-lg border border-border bg-surface aspect-[4/5]"
            width="400"
            height="500"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
