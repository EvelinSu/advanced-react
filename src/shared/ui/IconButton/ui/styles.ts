import styled from '@emotion/styled';

export const SIconButton = styled.div(({ theme }) => ({
    display: 'flex',
    borderRadius: '50%',
    padding: 5,
    transition: '0.2s',
    transitionProperty: 'background-color',

    '&:hover': {
        backgroundColor: theme.palette.primary.mainHover100
    }
}));