import axios, { CancelToken } from "axios";
import {
	PostType,
	CommentType,
	AlbumType,
	PhotoType,
	TodoType,
} from "../interface";

export const ListPosts = async (
	signal: CancelToken,
	userId?: number | string,
): Promise<PostType[]> => {
	const url = userId
		? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
		: "https://jsonplaceholder.typicode.com/posts";
	const posts = await axios.get(url, { cancelToken: signal });
	return posts.data;
};

export const ListComments = async (
	signal: CancelToken,
	postId: number | string,
): Promise<CommentType[]> => {
	const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

	const posts = await axios.get(url, { cancelToken: signal });
	return posts.data;
};

export const ListAlbums = async (
	signal: CancelToken,
	userId?: number | string,
): Promise<AlbumType[]> => {
	const url = userId
		? `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
		: "https://jsonplaceholder.typicode.com/albums";
	const albums = await axios.get(url, { cancelToken: signal });
	return albums.data;
};

export const ListPhoto = async (
	signal: CancelToken,
	albumId?: number | string,
): Promise<PhotoType[]> => {
	const url = albumId
		? `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
		: "https://jsonplaceholder.typicode.com/photos";
	const photos = await axios.get(url, { cancelToken: signal });
	return photos.data;
};

export const ListUsers = async (
	signal: CancelToken,
	userId?: number | string,
): Promise<any> => {
	const url = userId
		? `https://jsonplaceholder.typicode.com/users?id=${userId}`
		: "https://jsonplaceholder.typicode.com/users";
	const users = await axios.get(url, { cancelToken: signal });
	return users.data;
};
export const ListTodos = async (
	signal: CancelToken,
	userId?: number | string,
): Promise<TodoType[]> => {
	const url = userId
		? `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
		: "https://jsonplaceholder.typicode.com/todos";
	const todos = await axios.get(url, { cancelToken: signal });
	return todos.data;
};
