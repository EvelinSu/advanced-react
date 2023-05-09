import { Link } from 'react-router-dom';
import React from 'react';
import { SNavbarWrapper, SNavList } from './styles';
import { useTheme } from 'app/providers/StyleProvider';

export const Navbar = () => {
    const { themeKey, setThemeKey } = useTheme();

    const toggleTheme = () => {
        setThemeKey(themeKey === 'default' ? 'light' : 'default');
    };

    return (
        <SNavbarWrapper>
            <SNavList>
                <Link to={ '/' }>Main page</Link>
                <Link to={ '/about' }>About page</Link>
            </SNavList>
            <button onClick={ toggleTheme }>Change theme</button>
        </SNavbarWrapper>
    );
};

