import { lightTheme } from './themes/light';
import { defaultTheme } from './themes/default';

declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
}

export type ThemeType = typeof defaultTheme

export const themes: Record<Themes, ThemeType> = {
    light: lightTheme,
    default: defaultTheme
};

export type Themes = 'light' | 'default'
