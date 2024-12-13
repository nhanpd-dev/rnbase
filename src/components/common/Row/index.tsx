import React from 'react';
import { Box, BoxProps } from '../Box';

export const Row: React.FC<BoxProps> = function ({ ...props }) {
  return <Box horizontal {...props} />;
};
