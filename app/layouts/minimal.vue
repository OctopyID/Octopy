<template>
  <div class="flex min-h-screen flex-col">
    <LayoutAppHeader />
    <main class="mx-auto w-full max-w-4xl flex-grow px-4 py-12 sm:px-6 lg:px-8">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
