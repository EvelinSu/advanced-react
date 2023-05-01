import { styled } from '../styles/stitches.config';

export const SLayout = styled('div', {
    fd: 'column',
    h: '100vh',
    bc: '$primaryMain',

    '@md': {
        h: '100vh'
    }
});