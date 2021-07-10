import React, { FC } from "react";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BlockIcon from "@material-ui/icons/Block";
import { useStyles } from "./styles";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useHistory } from "react-router-dom";
import useModules from "../../modules";
import StarsIcon from "@material-ui/icons/Stars";
import SettingsIcon from "@material-ui/icons/Settings";
import { Box, Typography } from "@material-ui/core";
interface NavigationProps {
	open?: boolean;
}
export const Navigation: FC<NavigationProps> = ({ open, children }) => {
	const classes = useStyles();
	const history = useHistory();
	const handleGoHome = (event: React.MouseEvent<{}>) => {
		history.push({ pathname: "/" });
	};

	const routes = useModules();

	const favories = routes.filter((route) => route.favori);

	const handleClickFavori = (event: React.MouseEvent<{}>, path: string) => {
		event.preventDefault();
		history.push({ pathname: `${path}` });
	};
	return (
		<>
			<CssBaseline />
			<div className={classes.toolbar}>
				<Button
					className={classes.logo}
					onClick={handleGoHome}
					startIcon={<ListAltIcon fontSize='large' />}
				>
					{open ? "TS REACT SERVICES" : ""}
				</Button>
			</div>
			<Divider style={{ background: "#FFF5" }} />
			<Box className={classes.labeltitle} display='flex' alignItems='center'>
				<StarsIcon />
				<Typography style={{ marginLeft: 33 }}>Mes favoris</Typography>
			</Box>

			<Divider style={{ background: "#FFF5" }} />
			<List>
				{favories.map((route, index) => (
					<ListItem
						button
						key={route.label}
						onClick={(event) => handleClickFavori(event, route.path)}
						className={classes.navigation}
					>
						<ListItemIcon>{route.icon}</ListItemIcon>
						<ListItemText primary={route.label} />
					</ListItem>
				))}
			</List>
			<Divider style={{ background: "#FFF5" }} />
			<Box className={classes.labeltitle} display='flex' alignItems='center'>
				<SettingsIcon />
				<Typography style={{ marginLeft: 33 }}>Parametres</Typography>
			</Box>
			<Divider style={{ background: "#FFF5" }} />
			<List>
				{["Profile", "Paramètres", "Connection"].map((text, index) => (
					<ListItem button key={text} className={classes.navigation} disabled>
						<ListItemIcon>
							<BlockIcon />
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</>
	);
};
