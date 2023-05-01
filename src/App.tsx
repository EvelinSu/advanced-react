import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './app/Layout/Layout';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { StyleProvider } from './app/providers/style/StyleProvider';

export const App = () => {

    return (
        <StyleProvider>
            <Layout>
                <Link to={ '/' }>Main page</Link>
                <Link to={ '/about' }>About page</Link>
                <Suspense fallback={ <div>Loading...</div> }>
                    <Routes>
                        <Route path={ '/about' } element={ <AboutPageLazy /> } />
                        <Route path={ '' } element={ <MainPageLazy /> } />
                    </Routes>
                </Suspense>
            </Layout>
        </StyleProvider>
    );
};

