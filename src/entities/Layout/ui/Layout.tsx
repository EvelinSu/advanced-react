import React from 'react';
import { SLayout } from './styles';
import { useTheme } from 'app/providers/StyleProvider';

type PropsType = {
    children: React.ReactNode,
}

export const Layout = ({ children }: PropsType) => {
    const { themeKey, setThemeKey } = useTheme();

    const toggleTheme = () => {
        setThemeKey(themeKey === 'default' ? 'light' : 'default');
    };

    return (
        <SLayout>
            <button onClick={ toggleTheme }>Change theme</button>
            { children }
        </SLayout>
    );
};

