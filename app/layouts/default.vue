<template>
  <div class="flex min-h-screen flex-col">
    <LayoutAppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
