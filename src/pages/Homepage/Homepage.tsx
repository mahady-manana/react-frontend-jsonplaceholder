import { Box, Divider, Typography } from "@material-ui/core";
import React from "react";
import { AlbumSection } from "./AlbumSection";
import { PostNew } from "./PostNew";
import { useStyles } from "./styles";
import { TodoSection } from "./TodoSection";

export const Homepage = () => {
	const classes = useStyles();
	return (
		<Box>
			<Box>
				<Typography variant='h2'>Quick overview</Typography>
				<Box my={2}>
					<Divider />
				</Box>
			</Box>
			<Box mb={2}>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
					minus. Sed possimus iste eveniet dignissimos natus ullam facere
					provident! Corrupti asperiores, repellendus vero nihil aliquid
					eligendi! Eligendi facere non voluptas.
				</Typography>
			</Box>
			<Box display='flex' justifyContent='space-between'>
				<div className={classes.boxOverview}>
					<TodoSection />
				</div>
				<div className={classes.boxOverview}>
					<PostNew />
				</div>
				<div className={classes.boxOverview}>
					<AlbumSection />
				</div>
			</Box>
		</Box>
	);
};
