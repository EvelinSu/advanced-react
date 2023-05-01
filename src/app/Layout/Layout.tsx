import React, { useContext } from 'react';
import { SLayout } from './styles';
import { StyleContext } from '../providers/style/StyleContext';

type PropsType = {
    children: React.ReactNode,
}

export const Layout = ({ children }: PropsType) => {
    const { theme, setTheme } = useContext(StyleContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'default' : 'light');
    };

    return (
        <SLayout>
            <button onClick={ toggleTheme }>Change theme</button>
            { children }
        </SLayout>
    );
};

