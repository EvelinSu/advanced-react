import { defaultTheme } from 'app/styles/themes/default';

declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
}

export type ThemeType = typeof defaultTheme

export type Themes = 'light' | 'default'
