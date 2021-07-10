import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./styles";
import { Box, Link } from "@material-ui/core";

interface HeadersProps {
	className?: string;
	onClickMenu?: (event: React.MouseEvent<{}>) => void;
	open?: boolean;
}
export const Headers: FC<HeadersProps> = ({ className, onClickMenu, open }) => {
	const classes = useStyles();

	return (
		<AppBar
			position='static'
			color='primary'
			className={className || ""}
			style={open ? {} : { marginLeft: 73 }}
		>
			<Toolbar>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					onClick={onClickMenu}
				>
					{open ? <CloseIcon /> : null}
				</IconButton>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder='Search…'
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ "aria-label": "search" }}
					/>
				</div>
				<div className={classes.grow} />
				<Box>
					<Link href='/todos' className={classes.link}>
						Todo
					</Link>
					<Link href='/posts' className={classes.link}>
						News
					</Link>
					<Link href='/albums' className={classes.link}>
						Albums
					</Link>
					<Link href='/posts' className={classes.link}>
						Ba
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
};
