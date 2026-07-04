<template>
  <div class="flex flex-col min-h-screen">
    <LayoutAppHeader />
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <article class="lg:col-span-3">
        <slot />
      </article>
      <aside class="hidden lg:block lg:col-span-1">
        <!-- TOC goes here -->
        <div class="sticky top-24">
          <slot name="sidebar" />
        </div>
      </aside>
    </main>
    <LayoutAppFooter />
  </div>
</template>
