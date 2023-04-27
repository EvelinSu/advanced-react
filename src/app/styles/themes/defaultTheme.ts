declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
}

type ThemeType = typeof defaultTheme;

export const defaultTheme = {
    palette: {
        primary: {
            main: '#1b1d25',
            contrastText: '#FFFFFF'
        }
    }
};

