<template>
    <section class="border-t border-gray-200 bg-white text-gray-700 sm:mt-20 dark:border-gray-800 dark:bg-gray-900">
        <div class="container mx-auto flex max-w-7xl flex-col items-center px-7 py-5  sm:flex-row">
            <p class="mt-4 text-sm text-gray-700 sm:mt-0 sm:ml-4 sm:border-gray-300 sm:pl-4 dark:text-gray-100 dark:sm:border-gray-700">
                {{ year }} © <span class="font-semibold">Octopy ID</span>
            </p>

            <div class="mt-4 inline-flex justify-center gap-x-3 sm:mt-0 sm:ml-auto sm:justify-start">
                <a v-for="social in socials" :href="social.href" target="_blank" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <span class="sr-only">{{ social.name }}</span>
                    <Icon :name="social.icon" class="size-6"></Icon>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { socials } from '~/config';
import { Icon } from '@views/commons/vue';

const year = new Date().getFullYear();
</script>
