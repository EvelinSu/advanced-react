import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';

export const SThemeSwitcher = styled.button({
    backgroundColor: 'transparent',
    cursor: 'pointer'
});

export const SThemeSwitcherMotion = styled(AnimatePresence)({});