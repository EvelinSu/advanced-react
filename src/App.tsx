import { Admin, Resource } from 'react-admin';
import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './pages/UserList/UserList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
export const App = () => {
    return (
        <Admin dataProvider={ dataProvider }>
            <Resource name={ 'users' } list={ UserList } />
        </Admin>
    );
};

