import React, { FC } from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { TodoType, UserType } from "../../hooks";
import { useStyles } from "./styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

interface CardItemProps {
	data: {
		user?: UserType;
		todo: TodoType;
	};
	onClickItem: (data: CardItemProps["data"]) => void;
}
export const CardTodo: FC<CardItemProps> = ({ data, onClickItem }) => {
	const classes = useStyles();
	const { todo, user } = data;
	const handleClick = (event: React.MouseEvent<{}>) => {
		event.preventDefault();
		onClickItem(data);
	};
	return (
		<Card elevation={3} className={classes.card}>
			<Box onClick={handleClick}>
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Typography variant='h4' color='primary'>
						{todo.title}
					</Typography>
					{todo.completed ? (
						<CheckCircleIcon color='primary' />
					) : (
						<RadioButtonUncheckedIcon color='primary' />
					)}
				</Box>
				<Box>
					<Typography>{user?.name}</Typography>
					<Typography>{user?.email}</Typography>
					<Typography>{user?.phone}</Typography>
					<Typography>{user?.website}</Typography>
				</Box>
				<Box>
					<Typography>{user?.company?.name}</Typography>
				</Box>
			</Box>
		</Card>
	);
};
