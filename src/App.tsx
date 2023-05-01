import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './app/Layout/Layout';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { darkTheme } from './app/styles/themes/dark';
import { globalStyles } from './app/styles/global';

export const App = () => {
    globalStyles();
    return (
        <Layout theme={ darkTheme }>
            <Link to={ '/' }>Main page</Link>
            <Link to={ '/about' }>About page</Link>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route path={ '/about' } element={ <AboutPageLazy /> } />
                    <Route path={ '' } element={ <MainPageLazy /> } />
                </Routes>
            </Suspense>
        </Layout>
    );
};

