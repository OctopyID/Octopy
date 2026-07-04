<template>
  <div class="flex min-h-screen flex-col">
    <LayoutAppHeader />
    <main
      class="container mx-auto grid flex-grow grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8"
    >
      <article class="lg:col-span-3">
        <slot />
      </article>
      <aside class="hidden lg:col-span-1 lg:block">
        <!-- TOC goes here -->
        <div class="sticky top-24">
          <slot name="sidebar" />
        </div>
      </aside>
    </main>
    <LayoutAppFooter />
  </div>
</template>
