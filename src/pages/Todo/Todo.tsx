import {
	Divider,
	Box,
	Typography,
	FormControlLabel,
	Checkbox,
	Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { LoadingCircle } from "../../components/Loading";
import { TodoType, UserType, useTodo, useUsers } from "../../hooks";
import { CardTodo, DetailTodo } from "../../components";
import { useStyles } from "./styles";

interface DetailsProps {
	data?: {
		user?: UserType;
		todo: TodoType;
	};
}
export const Todo = () => {
	const classes = useStyles();
	const [selected, setSelected] = useState<DetailsProps["data"]>();
	const [filters, setFilters] = useState<"completed" | "uncompleted">();
	const [loadMore, setLoadMore] = useState<number>(7);
	const { loading, todos } = useTodo({});
	const dataUser = useUsers({});
	const users = dataUser.users;
	const loadUser = dataUser.loading;
	const onLoadMore = (event: React.MouseEvent<{}>) => {
		event.preventDefault();
		setLoadMore((prev) => prev + 5);
	};
	const todoByUser = todos
		?.filter((todo) =>
			filters === "completed"
				? todo.completed
				: filters === "uncompleted"
				? !todo.completed
				: todo,
		)
		.map((todo) => {
			const user = users?.find((user) => user.id === todo.userId);
			return {
				todo,
				user,
			};
		});
	const handleSelect = (
		data: React.SetStateAction<
			{ user?: UserType | undefined; todo: TodoType } | undefined
		>,
	) => {
		setSelected(data);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const checked = event.target.checked;
		setFilters(checked ? (event.target.name as any) : undefined);
		const statut =
			name === "completed" && checked
				? "completed"
				: name === "uncompleted" && checked
				? "uncompleted"
				: undefined;
		setFilters(statut);
	};

	return (
		<>
			<Box py={1}>
				<Typography variant='h3'>Liste de To do</Typography>
				<Divider />
			</Box>
			<Box display='flex'>
				<Box width='555px' position='relative'>
					<Box
						width='100%'
						position='absolute'
						className={classes.filter}
						textAlign='center'
					>
						<FormControlLabel
							control={
								<Checkbox
									checked={filters === "completed"}
									onChange={handleChange}
									name='completed'
								/>
							}
							label='Terminee'
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={filters === "uncompleted"}
									onChange={handleChange}
									name='uncompleted'
								/>
							}
							label='A realiser'
						/>
					</Box>
					<Box className={classes.cardLeft} width='100%' mt={6}>
						{loading || loadUser ? (
							<LoadingCircle />
						) : (
							<Box>
								{todoByUser?.slice(0, loadMore).map((todo, index) => {
									return (
										<CardTodo
											data={todo}
											onClickItem={handleSelect}
											key={todo.todo.id}
										/>
									);
								})}
								<Box textAlign='center' p={2}>
									<Button
										color='primary'
										variant='contained'
										onClick={onLoadMore}
									>
										Voir plus todo ...
									</Button>
								</Box>
							</Box>
						)}
					</Box>
				</Box>
				<Box width='100%' className={classes.details}>
					{loading || loadUser ? (
						<LoadingCircle />
					) : (
						<>
							{selected ? (
								<DetailTodo data={selected} />
							) : (
								<Box textAlign='center'>
									<Typography>Il n'y pas de TODO selectionne ici</Typography>
									<Typography>
										Cliquer si le liste pour voirs le details
									</Typography>
								</Box>
							)}
						</>
					)}
				</Box>
			</Box>
		</>
	);
};
