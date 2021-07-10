import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    boxOverview: {
      width: 'calc(33% - 20px)',
      background: 'rgb(0 0 0 / 8%)',
      padding: 30,
      boxShadow: '2px 2px 5px 0 #ccc',
    },
    popularAlbumCard: {
      background: '#ccc',
      textAlign: 'center',
    },
    album: {
      padding: 20,
    },
  }),
);
