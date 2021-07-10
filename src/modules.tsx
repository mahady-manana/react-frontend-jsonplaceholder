import { Dashboard } from "@material-ui/icons";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import AlbumIcon from "@material-ui/icons/Album";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import React, { ReactNode } from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { Todo } from "./pages/Todo/Todo";
import { Album } from "./pages/Album/Album";
import { Post } from "./pages/Post/Post";

type RouteType = {
	component: ReactNode;
	path: string;
	exact: boolean;
	icon: ReactNode;
	label: string;
	favori?: boolean;
};
const useModules = () => {
	const routes: RouteType[] = [
		{
			component: <Homepage />,
			path: "/",
			exact: true,
			icon: <Dashboard />,
			label: "Dashboard",
			favori: true,
		},
		{
			component: <Todo />,
			path: "/todos",
			exact: true,
			icon: <FormatListNumbered />,
			label: "To do",
			favori: true,
		},
		{
			component: <Album />,
			path: "/albums",
			exact: true,
			icon: <AlbumIcon />,
			label: "Liste des albums",
			favori: true,
		},
		{
			component: <Post />,
			path: "/posts",
			exact: true,
			icon: <FiberNewIcon />,
			label: "Posts - News",
			favori: true,
		},
	];
	return routes;
};
export default useModules;
