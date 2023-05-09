import React from 'react';
import { Layout } from 'entities/Layout';
import { StyleProvider } from 'app/providers/StyleProvider';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';

export const App = () => {

    return (
        <StyleProvider>
            <Layout>
                <Navbar />
                <AppRouter />
            </Layout>
        </StyleProvider>
    );
};

