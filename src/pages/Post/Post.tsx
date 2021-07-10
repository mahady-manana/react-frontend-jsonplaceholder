import { Box, Button, Divider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { LoadingCircle } from "../../components/Loading";
import { usePost } from "../../hooks";
import { PostItem } from "./PostItem";

export const Post = () => {
	const [loadMore, setLoadMore] = useState<number>(7);
	const { loading, posts } = usePost({});
	const onLoadMore = (event: React.MouseEvent<{}>) => {
		event.preventDefault();
		setLoadMore((prev) => prev + 5);
	};
	return (
		<Box>
			<Typography variant='h2'>Liste de Posts - News</Typography>
			<Divider />
			<Box>
				{loading ? (
					<LoadingCircle />
				) : (
					<Box>
						{posts?.slice(0, loadMore).map((post, index) => {
							return <PostItem post={post} key={post.id} />;
						})}
						<Box textAlign='center' p={2}>
							<Button color='primary' variant='contained' onClick={onLoadMore}>
								Voir plus de post ...
							</Button>
						</Box>
					</Box>
				)}
			</Box>
		</Box>
	);
};
