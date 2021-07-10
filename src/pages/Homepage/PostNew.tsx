import { Box, Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { LoadingCircle } from "../../components/Loading";
import { usePost } from "../../hooks";

export const PostNew = () => {
	const history = useHistory();
	const { loading, posts } = usePost({});

	const nbPost = posts?.length;

	const GoToPost = (event: React.MouseEvent<{}>) => {
		event.preventDefault();
		history.push({ pathname: "/posts" });
	};

	return (
		<Box>
			{loading ? (
				<LoadingCircle />
			) : (
				<>
					<Box>
						<Typography variant='h3'>Posts - News</Typography>
						<Divider style={{ marginBlock: 15 }} />
						<Typography>Total news postés : {nbPost}</Typography>
					</Box>
					<Box mt={2}>
						<Button color='primary' variant='outlined' onClick={GoToPost}>
							Voir posts & News
						</Button>
					</Box>
				</>
			)}
		</Box>
	);
};
