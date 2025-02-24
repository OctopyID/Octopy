<template>
    <section class="border-t mt-auto border-gray-200 bg-white text-gray-700 sm:mt-20 dark:border-gray-800 dark:bg-gray-900">
        <div
            class="container flex flex-col items-center py-8 mx-auto px-7 max-w-7xl sm:flex-row"
        >
            <Logo />
            <p class="mt-4 text-sm text-gray-700 dark:text-gray-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-300 dark:sm:border-gray-500 sm:mt-0">
                {{ year }} © <span class="font-semibold">Octopy ID</span> —  All Rights Reserved.
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
import { Icon, Logo } from '@views/commons/vue';

const year = new Date().getFullYear();
</script>
