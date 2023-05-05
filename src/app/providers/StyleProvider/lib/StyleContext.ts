import { lightTheme } from 'app/styles/themes/light';
import { defaultTheme } from 'app/styles/themes/default';
import { Themes, ThemeType } from '../lib/themeUtils';
import { createContext } from 'react';

export const themes: Record<Themes, ThemeType> = {
    light: lightTheme,
    default: defaultTheme
};

export type ThemeContextPropsType = {
    themeKey?: Themes;
    setThemeKey?: (theme: Themes) => void
}

export const StyleContext = createContext<ThemeContextPropsType>({});

export const LOCAL_STORAGE_THEME_KEY = 'levita-admin-theme';