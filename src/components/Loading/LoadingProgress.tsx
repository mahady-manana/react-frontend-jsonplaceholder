import { Box, LinearProgress, Typography } from '@material-ui/core';
import React, { FC } from 'react';

interface LoadingProgressProps {
  text?: string;
}
export const LoadingProgress: FC<LoadingProgressProps> = ({ text }) => {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box textAlign="center" width="50%">
        <Typography style={{ marginBottom: 20 }}>
          {text ? text : 'Chargement...'}
        </Typography>
        <LinearProgress />
      </Box>
    </Box>
  );
};
