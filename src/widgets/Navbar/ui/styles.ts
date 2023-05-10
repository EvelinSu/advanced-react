import styled from '@emotion/styled';

export const SNavbarWrapper = styled.nav(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrast,
    padding: theme.spaces['5'],
    gap: theme.spaces['5'],
    width: '100%'
}));

export const SNavList = styled.div(({ theme }) => ({
    display: 'flex',
    gap: theme.spaces['5']
}));