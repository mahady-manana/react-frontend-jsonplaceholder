import { Box, Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { LoadingCircle } from "../../components/Loading";
import { useTodo } from "../../hooks";

export const TodoSection = () => {
	const history = useHistory();
	const { loading, todos } = useTodo({});

	const nbTodo = todos?.length;
	const todoCompleted = todos?.filter((todo: any) => todo.completed).length;

	const GoToToDo = (event: React.MouseEvent<{}>) => {
		event.preventDefault();
		history.push({ pathname: "/todos" });
	};

	return (
		<Box>
			{loading ? (
				<LoadingCircle />
			) : (
				<>
					<Box>
						<Typography variant='h3'>Todos</Typography>
						<Divider style={{ marginBlock: 15 }} />
						<Typography>Total To do : {nbTodo}</Typography>
						<Typography>To do complète : {todoCompleted}</Typography>
						<Typography>
							Todos à réaliser :{" "}
							{nbTodo && todoCompleted && nbTodo - todoCompleted}
						</Typography>
					</Box>
					<Box mt={2}>
						<Button color='primary' variant='outlined' onClick={GoToToDo}>
							Voir To do
						</Button>
					</Box>
				</>
			)}
		</Box>
	);
};
