<template>
  <component :is="icon" :stroke-width="stroke" />
</template>

<script lang="ts" setup>
import { AtSign, Facebook, Github, Instagram, Linkedin, Menu, Moon, Sun, X } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  stroke: {
    type: Number,
    default: 2,
  },
});

const icons = {
  Moon,
  Sun,
  Facebook,
  Instagram,
  AtSign,
  Linkedin,
  Github,
  X,
  Menu,
};

const icon = computed(() => {
  return icons[props.name as keyof typeof icons];
});
</script>
