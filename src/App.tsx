import React, { Suspense, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './app/Layout/Layout';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from './app/styles/global';
import { themes } from './app/styles/themeUtils';

export const App = () => {
    const [theme, setTheme] = useState(themes.default);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.default : themes.light);
    };

    return (
        <ThemeProvider theme={ theme }>
            <Global styles={ globalStyles(theme) } />
            <Layout>
                <button onClick={ toggleTheme }>Change theme</button>
                <Link to={ '/' }>Main page</Link>
                <Link to={ '/about' }>About page</Link>
                <Suspense fallback={ <div>Loading...</div> }>
                    <Routes>
                        <Route path={ '/about' } element={ <AboutPageLazy /> } />
                        <Route path={ '' } element={ <MainPageLazy /> } />
                    </Routes>
                </Suspense>
            </Layout>
        </ThemeProvider>
    );
};

