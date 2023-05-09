import { defaultTheme } from './default';

export const lightTheme = {
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        primary: {
            main: '#282c49',
            contrast: '#ffffff'
        },
        paper: {
            default: '#FFFFFF',
            defaultContrast: '000000'
        }

    }
};