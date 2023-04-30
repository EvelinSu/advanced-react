import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0
    },
    'a': {
        color: 'inherit',
        textDecoration: 'none'
    },
    html: {
        scrollBehavior: 'smooth'
    },
    body: {
        size: '100%',
        fontFamily: 'Roboto Mono, monospace',
        overflowX: 'hidden',
        background: '$primaryMain',
        color: '$primaryContrast'
    }
});