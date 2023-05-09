import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'entities/Layout';
import { StyleProvider } from 'app/providers/StyleProvider';
import { AppRouter } from 'app/providers/router/ui/AppRouter';

export const App = () => {

    return (
        <StyleProvider>
            <Layout>
                <Link to={ '/' }>Main page</Link>
                <Link to={ '/about' }>About page</Link>
                <AppRouter />
            </Layout>
        </StyleProvider>
    );
};

