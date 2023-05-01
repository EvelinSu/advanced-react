import { createStitches, ScaleValue } from '@stitches/react';
import { Property } from '@stitches/react/types/css';
import FlexDirection = Property.FlexDirection;
import AlignItems = Property.AlignItems;

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({
    theme: {
        colors: {
            primaryMain: '#161616',
            primaryContrast: '#ffffff'
        },
        spaces: {
            0: 0,
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '20px',
            6: '24px',
            7: '28px',
            8: '32px',
            9: '36px'
        },
        fontSizes: {
            lg: '8.2rem',
            md: '3.6rem',
            sm: '2.4rem',
            xs: '1.8rem',
            xxs: '1.6rem'
        },
        fonts: {
            display: '"Roboto Mono", monospace'
        },
        sizes: {},
        zIndices: {
            base: 10,
            menu: 20,
            overlay: 30,
            modal: 40,
            alwaysOnTop: 50
        }
    },
    media: {
        sm: '(min-width: 425px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1440px)',
        xxl: '(min-width: 1600px)'
    },
    utils: {
        m: (value: ScaleValue<'spaces'> | string) => ({
            margin: value
        }),
        mt: (value: ScaleValue<'spaces'> | string) => ({
            marginTop: value
        }),
        mr: (value: ScaleValue<'spaces'> | string) => ({
            marginRight: value
        }),
        mb: (value: ScaleValue<'spaces'> | string) => ({
            marginBottom: value
        }),
        ml: (value: ScaleValue<'spaces'> | string) => ({
            marginLeft: value
        }),
        mx: (value: ScaleValue<'spaces'> | string) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value: ScaleValue<'spaces'> | string) => ({
            marginTop: value,
            marginBottom: value
        }),
        px: (value: ScaleValue<'spaces'> | string) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: ScaleValue<'spaces'> | string) => ({
            paddingTop: value,
            paddingBottom: value
        }),
        size: (value: ScaleValue<'sizes'> | string) => ({
            width: value,
            height: value
        }),
        br: (value: ScaleValue<'spaces'>) => ({
            borderRadius: value
        }),
        bc: (value: ScaleValue<'colors'>) => ({
            backgroundColor: value
        }),
        h: (value: string) => ({
            height: value
        }),
        fd: (value: FlexDirection) => ({
            display: 'flex',
            flexDirection: value
        }),
        fa: (value: AlignItems) => ({
            display: 'flex',
            alignItems: value
        })
    }
});
