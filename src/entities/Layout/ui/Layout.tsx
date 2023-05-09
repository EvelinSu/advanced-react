import React from 'react';
import { SLayout } from './styles';

type PropsType = {
    children: React.ReactNode,
}

export const Layout = ({ children }: PropsType) => {

    return (
        <SLayout>
            { children }
        </SLayout>
    );
};

