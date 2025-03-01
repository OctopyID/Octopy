<template>
  <component :is="icon" :stroke-width="stroke" />
</template>

<script lang="ts" setup>
import {
  AtSign,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Menu,
  Moon,
  Newspaper,
  Sun,
  Tag,
  X,
} from 'lucide-vue-next';
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
  AtSign,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Menu,
  Moon,
  Newspaper,
  Next: ChevronRight,
  Prev: ChevronLeft,
  Sun,
  Tag,
  X,
};

const icon = computed(() => {
  return icons[props.name as keyof typeof icons];
});
</script>
