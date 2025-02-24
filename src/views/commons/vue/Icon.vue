<template>
  <component :is="icon" :stroke-width="stroke"/>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import * as icons from 'lucide-vue-next';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  stroke: {
    type: Number,
    default: 2
  },
});

const icon = computed(() => {
  return (icons as Record<string, unknown>)[props.name];
});
</script>