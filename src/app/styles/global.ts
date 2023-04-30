import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0
    },
    'html, body': {
        maxWidth: '100vw',
        overflowX: 'hidden'
    },
    'a': {
        color: 'inherit',
        textDecoration: 'none'
    }
});