import React, { FC } from "react";
import { Box, Typography } from "@material-ui/core";
import { TodoType, UserType } from "../../hooks";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

interface DetailsProps {
	data?: {
		user?: UserType;
		todo: TodoType;
	};
}
export const DetailTodo: FC<DetailsProps> = ({ data }) => {
	// const classes = useStyles();
	const todo = data?.todo;
	const user = data?.user;
	return (
		<Box>
			<Typography color='primary'>Todo nunero : {todo?.id}</Typography>
			<Box display='flex' alignItems='center'>
				<Typography variant='h3' style={{ marginRight: 30 }}>
					{todo?.title}
				</Typography>
				{todo?.completed ? (
					<CheckCircleIcon color='primary' />
				) : (
					<RadioButtonUncheckedIcon color='primary' />
				)}
			</Box>
			<Box>
				<Typography variant='h4' color='primary'>
					Person assignee
				</Typography>
				<Typography>{user?.name}</Typography>
				<Typography>{user?.email}</Typography>
				<Typography>{user?.phone}</Typography>
				<Typography>{user?.website}</Typography>
			</Box>
			<Box>
				<Typography variant='h4' color='primary'>
					Adresse
				</Typography>
				<Typography>{user?.address?.street}</Typography>
				<Typography>{user?.address?.suite}</Typography>
				<Typography>{user?.address?.zipcode}</Typography>
				<Typography>{user?.address?.city}</Typography>
			</Box>
			<Box>
				<Typography variant='h4' color='primary'>
					Entreprise
				</Typography>
				<Typography>{user?.company?.name}</Typography>
				<Typography>{user?.company?.catchPhrase}</Typography>
				<Typography>{user?.company?.bs}</Typography>
			</Box>
		</Box>
	);
};
