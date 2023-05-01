import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
        fontSize: 'inherit',
        font: 'inherit'
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
        fontFamily: '"Consolas", sans-serif',
        fontSize: 16,
        overflowX: 'hidden',
        background: '$primaryMain',
        color: '$primaryContrast'
    }
});