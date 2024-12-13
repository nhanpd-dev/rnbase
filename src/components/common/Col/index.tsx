import React from 'react';
import { Box, BoxProps } from '../Box';

export const Col: React.FC<BoxProps> = function ({ ...props }) {
  return <Box {...props} />;
};
