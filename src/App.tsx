import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { defaultTheme } from './app/styles/themes/defaultTheme';
import { globalStyles } from './app/styles/globalStyles';
import { MainPage } from './pages/MainPage/MainPage';

export const App = () => {

    return (
        <ThemeProvider theme={ defaultTheme }>
            <Global styles={ globalStyles } />
            <Routes>
                <Route path={ '' } element={ <MainPage /> } />
            </Routes>
        </ThemeProvider>
    );
};

