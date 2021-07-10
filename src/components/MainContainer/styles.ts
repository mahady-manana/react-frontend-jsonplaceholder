import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles(
	(theme: Theme) =>
		createStyles({
			root: {
				display: "flex",
				height: "100%",
			},
			appBar: {
				zIndex: theme.zIndex.drawer + 1,
				transition: theme.transitions.create(["width", "margin"], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				height: 65,
				position: "fixed",
			},
			appBarShift: {
				marginLeft: drawerWidth,
				width: `calc(100% - ${drawerWidth}px)`,
				transition: theme.transitions.create(["width", "margin"], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
			menuButton: {
				marginRight: 36,
			},
			hide: {
				display: "none",
			},
			logo: {
				fontWeight: 700,
				"& svg": {
					fontSize: "35px !important",
				},
			},
			drawer: {
				zIndex: 9999999,
				width: drawerWidth,
				flexShrink: 0,
				whiteSpace: "nowrap",
				background: theme.palette.secondary.main,
				"& *": {
					color: "#fff",
				},
			},
			labeltitle: {
				padding: 15,
			},
			paper: {
				background: "none",
			},
			drawerOpen: {
				width: drawerWidth,
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
			drawerClose: {
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				overflowX: "hidden",
				width: theme.spacing(7) + 1,
				[theme.breakpoints.up("sm")]: {
					width: theme.spacing(9) + 1,
				},
			},
			toolbar: {
				fontWeight: 700,
				display: "flex",
				alignItems: "center",
				padding: theme.spacing(0, 1),
				// necessary for content to be below app bar
				...theme.mixins.toolbar,
			},
			content: {
				flexGrow: 1,
				padding: theme.spacing(3),
				overflowY: "auto",
				marginTop: 65,
			},
			navigation: {
				paddingBlock: 0,
			},
		}),
	{ index: 1 },
);
