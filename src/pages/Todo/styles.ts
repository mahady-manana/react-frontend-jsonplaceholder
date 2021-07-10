import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardLeft: {
      borderRight: '1px solid #ccc',
      overflowY: 'auto',
      padding: 20,
      paddingTop: '30px !important',
      maxHeight: '100vh',
    },
    details: {
      padding: 20,
    },
    filter: {
      background: theme.palette.primary.main,
      padding: 5,
      top: 0,
      left: 0,
      '& *': {
        color: '#fff',
      },
    },
  }),
);
