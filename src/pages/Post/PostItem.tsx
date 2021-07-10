import {
	Box,
	Button,
	Card,
	CircularProgress,
	Divider,
	Typography,
} from "@material-ui/core";
import { Comment } from "@material-ui/icons";
import React, { FC, useState } from "react";
import { PostType, useComment, useUsers } from "../../hooks";

interface PostemProps {
	post: PostType;
}
export const PostItem: FC<PostemProps> = ({ post }) => {
	const [showComment, setShowComment] = useState<boolean>(false);
	const { comments } = useComment({ postId: post.id });
	const { loading, singleUser } = useUsers({ userId: post.userId });
	const handleShowComment = (event: React.MouseEvent<{}>) => {
		event.preventDefault();
		setShowComment(!showComment);
	};
	console.log("ùsingle", singleUser);

	return (
		<Card elevation={3} style={{ marginBottom: 20, padding: 20 }}>
			<Box mb={1}>
				<Typography style={{ fontWeight: 700 }} variant='h3'>
					{post.title}
				</Typography>
				<Typography>{post.body}</Typography>
				<Box mt={1}>
					{loading ? (
						<Box textAlign='center'>
							<CircularProgress style={{ color: "#fff" }} />
						</Box>
					) : (
						<Typography color='primary' style={{ fontWeight: 700 }}>
							Posté par : {singleUser?.name}, {singleUser?.email},{" "}
							{singleUser?.phone},{singleUser?.website}
						</Typography>
					)}
				</Box>
			</Box>
			{showComment ? (
				<Box mb={1}>
					<Divider />
					<Box py={2}>
						<Typography>Commentaires :</Typography>
					</Box>
					{comments?.map((comment, index) => {
						return (
							<Box mb={2}>
								<Card elevation={2}>
									<Box p={1}>
										<Typography style={{ fontStyle: "italic" }}>
											{comment.body}
										</Typography>
										<Typography variant='overline' style={{ fontWeight: 700 }}>
											Auteur : {comment.email}
										</Typography>
									</Box>
								</Card>
							</Box>
						);
					})}
				</Box>
			) : null}
			<Divider />
			<Box>
				<Button startIcon={<Comment />} onClick={handleShowComment}>
					{showComment
						? "Fermer les commentaires"
						: `Voir les commentaires (${comments?.length})`}
				</Button>
			</Box>
		</Card>
	);
};
