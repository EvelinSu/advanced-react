import { Global, ThemeProvider as EmotionProvider } from '@emotion/react';
import React, { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, StyleContext, themes } from '../lib/StyleContext';
import { Themes } from '../lib/themeUtils';
import { globalStyles } from 'app/styles/global';

const currentThemeKey = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || 'default';

type PropsType = {
    children: React.ReactNode
}
export const StyleProvider = ({ children }: PropsType) => {
    const [themeKey, setThemeKey] = useState<Themes>(currentThemeKey);

    const getCurrentTheme = themes[themeKey] || themes['default'];

    const defaultProps = useMemo(() => ({
        themeKey, setThemeKey
    }), [themeKey]);

    return (
        <EmotionProvider theme={ getCurrentTheme }>
            <StyleContext.Provider value={ defaultProps }>
                <Global styles={ globalStyles(getCurrentTheme) } />
                { children }
            </StyleContext.Provider>
        </EmotionProvider>
    );
};

