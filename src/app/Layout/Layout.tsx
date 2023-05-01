import React, { useState } from 'react';
import { SLayout } from './styles';
import { getTheme, Themes } from '../styles/themeUtils';

type PropsType = {
    children: React.ReactNode,
}

export const Layout = ({ children }: PropsType) => {
    const [theme, setTheme] = useState<Themes>('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <SLayout className={ getTheme(theme) as string }>
            <button onClick={ toggleTheme }>change theme</button>
            { children }
        </SLayout>
    );
};

