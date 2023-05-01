import { lightTheme } from '../../styles/themes/light';
import { defaultTheme } from '../../styles/themes/default';
import { Themes, ThemeType } from '../../styles/themeUtils';
import { createContext } from 'react';

export const themes: Record<Themes, ThemeType> = {
    light: lightTheme,
    default: defaultTheme
};

export type ThemeContextPropsType = {
    theme?: Themes;
    setTheme?: (theme: Themes) => void
}

export const StyleContext = createContext<ThemeContextPropsType>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';