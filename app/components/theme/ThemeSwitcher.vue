<script setup lang="ts">
const { isDark, currentTheme, setTheme, toggleTheme } = useTheme()

const themes = [
  { value: 'light',  label: 'Light',  icon: 'ph:sun-bold' },
  { value: 'dark',   label: 'Dark',   icon: 'ph:moon-bold' },
  { value: 'system', label: 'System', icon: 'ph:monitor-bold' },
] as const
</script>

<template>
  <div class="relative" role="group" aria-label="Theme selector">

    <!-- Compact toggle (mobile) -->
    <button
      class="theme-toggle flex md:hidden"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      :aria-pressed="isDark"
      @click="toggleTheme"
    >
      <Icon :name="isDark ? 'ph:sun-bold' : 'ph:moon-bold'" size="18" />
    </button>

    <!-- Segmented control (desktop) -->
    <div class="theme-segment hidden md:flex" role="radiogroup" aria-label="Theme">
      <button
        v-for="t in themes"
        :key="t.value"
        class="theme-segment__btn"
        :class="{ 'theme-segment__btn--active': currentTheme === t.value }"
        :aria-checked="currentTheme === t.value"
        role="radio"
        @click="setTheme(t.value)"
      >
        <Icon :name="t.icon" size="14" />
        <span>{{ t.label }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.theme-toggle {
  @apply items-center justify-center w-[36px] h-[36px] rounded-[var(--radius-md)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] text-[var(--color-text-secondary)] cursor-pointer transition-all duration-[var(--duration-fast)] ease-[var(--ease-smooth)];
}
.theme-toggle:hover {
  @apply bg-[var(--color-interactive-muted)] text-[var(--color-interactive)] border-[var(--color-interactive)];
}
.theme-segment {
  @apply flex items-center gap-[2px] p-[3px] bg-[var(--color-bg-subtle)] border border-[var(--color-border)] rounded-[var(--radius-lg)];
}
.theme-segment__btn {
  @apply flex items-center gap-[5px] px-[10px] py-[4px] rounded-[var(--radius-md)] text-[12px] font-medium text-[var(--color-text-muted)] cursor-pointer bg-transparent border-none transition-all duration-[var(--duration-fast)] ease-[var(--ease-smooth)];
}
.theme-segment__btn:hover {
  @apply text-[var(--color-text-secondary)] bg-[var(--color-surface)];
}
.theme-segment__btn--active {
  @apply bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)];
}
</style>
