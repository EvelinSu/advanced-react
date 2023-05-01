import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import { theme } from './stitches.config';

export type Themes = 'light' | 'dark'

export type ThemeType = Partial<typeof theme>

export const themes: Record<Themes, ThemeType> = {
    light: lightTheme,
    dark: darkTheme
};

export const getTheme = (key: Themes) => {
    return themes[key];
};