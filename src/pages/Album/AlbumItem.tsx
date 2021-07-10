import { Box, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { PhotoType } from "../../hooks";

interface AlbumItemProps {
	photo: PhotoType;
}
export const AlbumItem: FC<AlbumItemProps> = ({ photo }) => {
	return (
		<Box maxWidth='25%' padding={1}>
			<Box
				style={{
					background: "#ccc",
					border: "1px solid #444",
					cursor: "pointer",
				}}
				p={1}
				height='100%'
			>
				<img src={photo.url} alt={photo.title} width='100%' />
				<Typography style={{ fontWeight: 700 }}>{photo?.title}</Typography>
			</Box>
		</Box>
	);
};
