import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from 'entities/Layout';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { StyleProvider } from 'app/providers/StyleProvider';

export const App = () => {

    return (
        <StyleProvider>
            <Layout>
                <Link to={ '/' }>Main page</Link>
                <Link to={ '/about' }>About page</Link>
                <Suspense fallback={ <div>Loading...</div> }>
                    <Routes>
                        <Route path={ '/about' } element={ <AboutPage /> } />
                        <Route path={ '' } element={ <MainPage /> } />
                    </Routes>
                </Suspense>
            </Layout>
        </StyleProvider>
    );
};

