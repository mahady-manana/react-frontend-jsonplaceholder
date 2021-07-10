import { Box, Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { LoadingCircle } from "../../components/Loading";
import { useAlbum } from "../../hooks";

export const AlbumSection = () => {
	const history = useHistory();
	const { loading, albums } = useAlbum({});

	const nbAlbum = albums?.length;
	const GoToalbums = (event: React.MouseEvent<{}>) => {
		event.preventDefault();
		history.push({ pathname: "/albums" });
	};
	return (
		<Box>
			{loading ? (
				<LoadingCircle />
			) : (
				<>
					<Box>
						<Typography variant='h3'>Album</Typography>
						<Divider style={{ marginBlock: 15 }} />
						<Typography>Total albums : {nbAlbum}</Typography>
					</Box>
					<Box mt={2}>
						<Button color='primary' variant='outlined' onClick={GoToalbums}>
							Voir les albums
						</Button>
					</Box>
				</>
			)}
		</Box>
	);
};
