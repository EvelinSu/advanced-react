import { createStitches } from '@stitches/react';
import { media } from './config/media';
import { utils } from './config/utils';

export const { styled, css } = createStitches({
    media,
    utils
});