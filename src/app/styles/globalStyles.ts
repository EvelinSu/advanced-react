import { Interpolation, Theme } from '@emotion/react';

export const globalStyles: Interpolation<Theme> = ((theme) => ({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    'html, body': {
        maxWidth: '100vw',
        overflowX: 'hidden'
    },
    'a': {
        color: 'inherit',
        textDecoration: 'none'
    }
}));