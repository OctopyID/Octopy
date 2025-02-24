<template>
    <div class="pointer-events-none relative h-20 w-full opacity-0"></div>

    <header id="header" class="absolute top-0 z-50 h-20 w-full">
        <div
            class="mx-auto flex h-full max-w-5xl items-center justify-between border-r-0 border-b border-l-0 border-transparent pr-4 pl-6 select-none lg:rounded-b-xl lg:border-r lg:border-l">

            <Logo class="w-full" />
            <div class="fixed inset-0 z-20 h-screen w-screen bg-white/90 duration-300 ease-out dark:bg-gray-900/90" v-on:click="toggle" v-if="mobile"></div>
            <nav class="relative z-30 flex w-full flex-row-reverse justify-start text-sm text-gray-500 sm:flex-row sm:justify-end dark:text-gray-400">
                <div class="ml-4 flex h-6 w-6 cursor-pointer flex-col items-end justify-center sm:hidden" v-on:click="toggle" v-if="!mobile">
                    <Icon name="Menu" class="h-8 w-8 text-gray-800 dark:text-gray-200"></Icon>
                </div>

                <div class="ml-4 h-6 w-6 -translate-x-1 cursor-pointer flex-col items-end justify-center sm:hidden" v-on:click="toggle" v-if="mobile">
                    <Icon name="X" class="h-6 w-6 text-gray-800 dark:text-gray-200"></Icon>
                </div>

                <div
                    class="dm:mx-0 fixed top-[75px] left-0 z-40 h-auto w-full flex-col items-end justify-start pt-7 pb-4 text-sm duration-300 ease-out sm:relative sm:top-0 sm:flex sm:h-auto sm:w-auto sm:flex-row sm:py-0 sm:pt-0 sm:pr-0"
                    :class="{ hidden: !mobile }"
                >
                    <div class="absolute inset-0 top-0 right-0 block h-full w-full px-3 sm:hidden">
                        <div class="relative h-full w-full rounded-xl border border-dashed border-gray-300 bg-white backdrop-blur-xs dark:border-gray-500 dark:bg-gray-900"></div>
                    </div>

                    <a
                        v-for="menu in menus"
                        :href="menu.route"
                        class="relative flex w-full items-center justify-center px-3 py-2 text-center font-medium tracking-wide duration-200 ease-out hover:text-gray-900 sm:mb-0 sm:py-0 md:w-auto dark:hover:text-white"
                    >
                        {{ menu.label }}
                    </a>
                </div>

                <div id="toggle" class="group relative ml-4 flex cursor-pointer items-center pl-6 font-medium tracking-wide text-gray-800 dark:text-white" @click="theme()">
                    <div class="horizon absolute left-0 flex h-6 w-6 items-center justify-center overflow-hidden border-b border-transparent group-hover:border-gray-600">
                        <Icon name="Sun" class="ease absolute h-6 w-6 transform fill-amber-500 transition duration-700" :class="{ rising: !dark }" v-show="!dark"></Icon>
                        <Icon name="Moon" class="ease absolute h-6 w-6 transform fill-amber-500 transition duration-700" :class="{ rising: dark }" v-show="dark"></Icon>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { menus } from '~/config.ts';
import { Icon, Logo } from '@views/commons/vue';
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';

const dark = useDark();
const theme = useToggle(dark, {
    //
});

const mobile = ref(false);
const toggle = () => {
    mobile.value = ! mobile.value;
};
</script>

<style scoped>
.horizon .rising {
    animation: 3s ease 0s 1 rising;
}

#toggle:hover svg {
    transform: translate3d(0, 10px, 0);
}

html.dark #toggle:hover .horizon {
    border-color: #718096 !important;
}

@keyframes rising {
    0% {
        opacity: 0;
        transform: translate3d(0, 30px, 0);
    }

    40% {
        opacity: 1;
        transform: translate3d(0, -2px, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 10px, 0);
    }
}
</style>
