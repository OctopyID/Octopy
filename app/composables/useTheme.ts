import { useColorMode } from '#imports';

export type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const colorMode = useColorMode();

  const isDark = computed(() => colorMode.value === 'dark');

  const currentTheme = computed<Theme>(() =>
    colorMode.preference === 'system' ? 'system' : (colorMode.value as Theme),
  );

  function setTheme(theme: Theme) {
    colorMode.preference = theme;
  }

  function toggleTheme() {
    setTheme(isDark.value ? 'light' : 'dark');
  }

  return { isDark, currentTheme, setTheme, toggleTheme };
}
