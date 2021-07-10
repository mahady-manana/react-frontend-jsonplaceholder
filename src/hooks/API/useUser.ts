import axios from "axios";
import { useEffect, useState } from "react";
import { ListUsers } from "./API";
import { UserType } from "../interface";

interface useUserProps {
	userId?: number | string;
}
export const useUsers = ({ userId }: useUserProps) => {
	const [user, setUser] = useState<UserType[]>();
	const [singleUser, setSingleUser] = useState<UserType>();
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		setLoading(true);
		const cancelToken = axios.CancelToken.source();
		const getUsers = async () => {
			const users = await ListUsers(cancelToken.token, userId);
			console.log(users);
			if (userId) {
				setSingleUser(users[0]);
			} else {
				setUser(users);
			}
			setLoading(false);
		};
		getUsers();
		return () => cancelToken.cancel();
	}, [userId]);
	return {
		users: user,
		singleUser: singleUser,
		loading: loading,
	};
};
