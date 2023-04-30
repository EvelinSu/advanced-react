import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Layout } from './app/Layout/Layout';
import { globalStyles } from './app/styles/global';

export const App = () => {
    globalStyles();
    return (
        <Layout>
            <Routes>
                <Route path={ '/about' } element={ <AboutPage /> } />
                <Route path={ '' } element={ <MainPage /> } />
            </Routes>
        </Layout>
    );
};

