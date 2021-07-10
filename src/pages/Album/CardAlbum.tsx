import { Box, Divider, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { LoadingCircle } from "../../components/Loading";
import { AlbumType, usePhoto } from "../../hooks";
import { AlbumItem } from "./AlbumItem";

interface CardAlbumProps {
	album: AlbumType;
}
export const CardAlbum: FC<CardAlbumProps> = ({ album }) => {
	const { loading, photos } = usePhoto({ albumId: album.id });
	return (
		<div>
			{loading ? (
				<Box>
					<LoadingCircle />
				</Box>
			) : (
				<Box>
					<Typography variant='h3'>
						Album {album.id} : {album?.title}
					</Typography>
					<Divider />
					<Box display='flex'>
						{photos?.slice(0, 4).map((photo, index) => {
							return <AlbumItem photo={photo} key={photo.id} />;
						})}
					</Box>
				</Box>
			)}
		</div>
	);
};
