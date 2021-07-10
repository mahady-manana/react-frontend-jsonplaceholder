import { Box, Button, Divider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { LoadingCircle } from "../../components/Loading";
import { useAlbum } from "../../hooks";
import { CardAlbum } from "./CardAlbum";
export const Album = () => {
	const [loadMore, setLoadMore] = useState<number>(5);
	const { loading, albums } = useAlbum({});
	const onLoadMore = (event: React.MouseEvent<{}>) => {
		event.preventDefault();
		setLoadMore((prev) => prev + 5);
	};
	return (
		<div>
			<Box>
				<Typography variant='h2'>Liste de nos albums</Typography>
			</Box>
			<Divider />
			{loading ? (
				<Box>
					<LoadingCircle />
				</Box>
			) : (
				<Box>
					{albums?.slice(0, loadMore).map((album, index) => {
						return <CardAlbum album={album} key={index} />;
					})}
					<Box textAlign='center' p={2}>
						<Button color='primary' variant='contained' onClick={onLoadMore}>
							Voir plus des albums ...
						</Button>
					</Box>
				</Box>
			)}
		</div>
	);
};
