import { atom } from 'nanostores';

export type Theme = 'light' | 'dark';

export const $theme = atom<Theme>('light');

export const toggleTheme = () => {
  $theme.set($theme.get() === 'light' ? 'dark' : 'light');
};