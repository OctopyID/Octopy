<template>
  <section class="py-16 md:py-24 bg-surface-raised border-y border-border">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-px bg-primary-500 w-12"></div>
            <h2 class="text-xs font-bold uppercase tracking-widest text-primary-500">The Brand</h2>
          </div>
          
          <h3 class="text-3xl font-extrabold text-text-primary mb-6">
            Octopy ID <br />
            <span class="text-text-secondary">The Manifesto</span>
          </h3>
          
          <p class="text-text-secondary text-lg leading-relaxed mb-6">
            The Octopus motif symbolizes adaptability, intelligence, and the capability to handle complex, multi-faceted environments simultaneously.
          </p>
          <p class="text-text-secondary text-lg leading-relaxed">
            Like an octopus with its many arms, Octopy ID thrives in multi-disciplinary stacks. Whether it's managing Linux daemons, orchestrating Go routines, or crafting Vue interfaces, the core philosophy remains the same: <strong>Precision, Scalability, and Resilience.</strong>
          </p>
        </div>
        
        <div class="relative flex justify-center items-center p-8">
          <!-- Abstract Octopus Motif -->
          <div class="w-48 h-48 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-500)_0%,_transparent_70%)] opacity-30 animate-pulse absolute rounded-full blur-2xl"></div>
          <Icon name="ph:tentacle-duotone" class="text-primary-500 relative z-10 opacity-80" size="140" />
        </div>
        
      </div>
    </div>
  </section>
</template>
