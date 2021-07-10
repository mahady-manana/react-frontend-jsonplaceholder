import React, { FC } from 'react';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from './styles';
import { Headers } from '../Headers';
import { Navigation } from './Navigation';

interface MainContainerProps {}
export const MainContainer: FC<MainContainerProps> = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (event: React.MouseEvent<{}>) => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Headers
        className={
          clsx(classes.appBar, {
            [classes.appBarShift]: open,
          }) as any
        }
        onClickMenu={handleDrawerOpen}
        open={open}
      />
      <Drawer
        onMouseOver={handleDrawerOpen}
        onMouseOut={handleDrawerClose}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.paper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Navigation open={open} />
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
};
