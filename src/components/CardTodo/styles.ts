import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    card: {
      marginBottom: 20,
      padding: 15,
      cursor: 'pointer',
    },
  }),
);
