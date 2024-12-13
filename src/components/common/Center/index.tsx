import React, { useMemo } from 'react';
import { Box, BoxProps } from '../Box';

export const Center: React.FC<Omit<BoxProps, 'justify' | 'alignItems'>> = ({
  horizontal = false,
  ...props
}) => {
  const justify = useMemo(
    () => (!horizontal ? 'flex-start' : 'center'),
    [horizontal],
  );
  const alignItems = useMemo(
    () => (horizontal ? 'flex-start' : 'center'),
    [horizontal],
  );
  return (
    <Box
      horizontal={horizontal}
      justify={justify}
      alignItems={alignItems}
      {...props}
    />
  );
};
