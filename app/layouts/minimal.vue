<template>
  <div class="flex flex-col min-h-screen">
    <LayoutAppHeader />
    <main class="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
