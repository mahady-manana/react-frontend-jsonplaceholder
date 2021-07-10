import { Box, CircularProgress } from "@material-ui/core";
import React, { FC } from "react";

interface LoadingCircleProps {
	text?: string;
}
export const LoadingCircle: FC<LoadingCircleProps> = ({ text }) => {
	return (
		<Box
			height='100%'
			display='flex'
			alignItems='center'
			justifyContent='center'
			minHeight='150px'
		>
			<Box textAlign='center'>
				<CircularProgress />
			</Box>
		</Box>
	);
};
