import React from 'react';
import { SLayout } from './styles';

type PropsType = {
    children: React.ReactNode,
    theme: string
}
export const Layout = ({ children, theme }: PropsType) => {
    return (
        <SLayout className={ theme }>
            { children }
        </SLayout>
    );
};

