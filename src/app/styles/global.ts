import { css } from '@emotion/react';
import { ThemeType } from '../providers/StyleProvider/lib/themeUtils';

export const globalStyles = (theme: ThemeType) => css({
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
        fontFamily: theme.fonts.display,
        fontSize: theme.fontSizes.md,
        overflowX: 'hidden',
        background: theme.palette.paper.default,
        color: theme.palette.paper.defaultContrast
    },
    'button, input': {
        border: 'none'
    }
});