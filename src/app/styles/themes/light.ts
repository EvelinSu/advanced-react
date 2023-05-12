import { defaultTheme } from './default';

export const lightTheme = {
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        primary: {
            main: '#282c49',
            contrast: '#ffffff',
            mainHover100: 'rgba(255, 255, 255, 0.1)'
        },
        paper: {
            default: '#FFFFFF',
            defaultContrast: '000000'
        }

    }
};