import React, { useContext } from 'react';
import { SLayout } from './styles';
import { StyleContext } from '../providers/style/StyleContext';

type PropsType = {
    children: React.ReactNode,
}

export const Layout = ({ children }: PropsType) => {
    const { themeKey, setThemeKey } = useContext(StyleContext);

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

