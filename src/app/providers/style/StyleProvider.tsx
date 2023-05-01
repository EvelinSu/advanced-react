import { Global, ThemeProvider as EmotionProvider } from '@emotion/react';
import { globalStyles } from '../../styles/global';
import React, { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, StyleContext, themes } from './StyleContext';
import { Themes } from '../../styles/themeUtils';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || 'default';

type PropsType = {
    children: React.ReactNode
}
export const StyleProvider = ({ children }: PropsType) => {
    const [theme, setTheme] = useState<Themes>(defaultTheme);

    const changeTheme = (theme: Themes) => {
        setTheme(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    };

    const defaultProps = useMemo(() => ({
        theme, setTheme: changeTheme
    }), [theme]);

    return (
        <EmotionProvider theme={ themes[theme] }>
            <StyleContext.Provider value={ defaultProps }>
                <Global styles={ globalStyles(themes[theme]) } />
                { children }
            </StyleContext.Provider>
        </EmotionProvider>
    );
};

