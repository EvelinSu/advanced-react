import { createTheme } from '@stitches/react';

export const theme = createTheme({
    fontSizes: {
        xs: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        xxl: '3rem',
        huge: '3.5rem'
    },
    sizes: {
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        full: '100%'
    },
    space: {
        0: 0,
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px',
        16: '64px',
        17: '68px',
        18: '72px',
        19: '76px',
        20: '80px'
    },
    colors: {
        primaryMain: '#161b2f'
    },
    zIndices: {
        base: 10,
        menu: 20,
        overlay: 30,
        modal: 40,
        alwaysOnTop: 50
    }
});

