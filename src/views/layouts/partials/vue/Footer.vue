<template>
  <section
    class="mt-auto flex w-full flex-col px-7     gap-y-3 border-t border-slate-200 bg-white py-8 text-slate-700 sm:mt-20 dark:border-slate-800 dark:bg-slate-900"
  >
    <div class="container mx-auto flex max-w-5xl flex-col items-center sm:flex-row">
      <Logo />
      <p
        class="mt-4 text-sm text-slate-700 sm:mt-0 sm:ml-4 sm:border-l sm:border-slate-300 sm:pl-4 dark:text-slate-100 dark:sm:border-slate-400"
      >
        {{ year }} © <span class="font-semibold">Octopy ID</span> — All Rights Reserved.
      </p>

      <div class="mt-3 inline-flex justify-center space-x-3 sm:mt-0 sm:ml-auto sm:justify-start">
        <a
          v-for="social in socials"
          :href="social.href"
          target="_blank"
          class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          <span class="sr-only">{{ social.name }}</span>
          <Icon :name="social.icon" class="size-6"></Icon>
        </a>
      </div>
    </div>

    <div class="container mx-auto flex w-full max-w-5xl flex-row items-center justify-center gap-x-4 md:justify-end">
      <div class="flex flex-row gap-x-1 text-sm">
        <template v-for="(link, index) in menus.footer" :key="link.route">
          <a :href="link.route" class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
            {{ link.label }}
          </a>
          <span v-if="index < menus.footer.length - 1" class="text-slate-500 dark:text-slate-400">/</span>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { menus, socials } from '@config';
import { Icon, Logo } from '@views/commons/vue';

const year = new Date().getFullYear();
</script>
