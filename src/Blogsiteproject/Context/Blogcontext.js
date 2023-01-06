import React from "react";
import { createContext, useReducer } from "react";
import Blogreducer from "./Blogreducer";

const BLOGS = [
	{
		id: 1,
		title: "Angular Js",
		type: "Web Development",
		description:
			"Occaecat non sint pariatur consectetur adipisicing nulla cillum ullamco. Enim minim in dolor officia aliqua excepteur. Mollit anim consectetur eiusmod in occaecat consectetur. Aute exercitation est id culpa culpa nisi irure occaecat aute id fugiat consectetur occaecat aute. Amet non duis anim excepteur incididunt eiusmod mollit Lorem.Officia exercitation velit ipsum magna ea amet sint dolor voluptate veniam incididunt id pariatur proident. Sit aute magna cillum deserunt ullamco amet mollit aute ea qui. Reprehenderit in Lorem minim fugiat. Sit dolor ullamco occaecat ut veniam officia nisi veniam proident incididunt. Est ad quis amet aute reprehenderit ipsum est deserunt fugiat duis incididunt voluptate nisi. Officia fugiat elit minim tempor est velit elit nulla irure. Culpa amet dolor ea incididunt culpa reprehenderit duis et consequat nostrud et.",
	},

	{
		id: 2,
		title: "Kotlin",
		type: "Andriod Development",
		description:
			"Occaecat non sint pariatur consectetur adipisicing nulla cillum ullamco. Enim minim in dolor officia aliqua excepteur. Mollit anim consectetur eiusmod in occaecat consectetur. Aute exercitation est id culpa culpa nisi irure occaecat aute id fugiat consectetur occaecat aute. Amet non duis anim excepteur incididunt eiusmod mollit Lorem.Officia exercitation velit ipsum magna ea amet sint dolor voluptate veniam incididunt id pariatur proident. Sit aute magna cillum deserunt ullamco amet mollit aute ea qui. Reprehenderit in Lorem minim fugiat. Sit dolor ullamco occaecat ut veniam officia nisi veniam proident incididunt. Est ad quis amet aute reprehenderit ipsum est deserunt fugiat duis incididunt voluptate nisi. Officia fugiat elit minim tempor est velit elit nulla irure. Culpa amet dolor ea incididunt culpa reprehenderit duis et consequat nostrud et.",
	},

	{
		id: 3,
		title: "React Js",
		type: "Web Development",
		description:
			"Occaecat non sint pariatur consectetur adipisicing nulla cillum ullamco. Enim minim in dolor officia aliqua excepteur. Mollit anim consectetur eiusmod in occaecat consectetur. Aute exercitation est id culpa culpa nisi irure occaecat aute id fugiat consectetur occaecat aute. Amet non duis anim excepteur incididunt eiusmod mollit Lorem.Officia exercitation velit ipsum magna ea amet sint dolor voluptate veniam incididunt id pariatur proident. Sit aute magna cillum deserunt ullamco amet mollit aute ea qui. Reprehenderit in Lorem minim fugiat. Sit dolor ullamco occaecat ut veniam officia nisi veniam proident incididunt. Est ad quis amet aute reprehenderit ipsum est deserunt fugiat duis incididunt voluptate nisi. Officia fugiat elit minim tempor est velit elit nulla irure. Culpa amet dolor ea incididunt culpa reprehenderit duis et consequat nostrud et.",
	},
];

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
	const [blogs, blogDispatch] = useReducer(Blogreducer, BLOGS);
	return <BlogContext.Provider value={{ blogs: blogs, blogDispatch: blogDispatch }}>{children}</BlogContext.Provider>;
};

export default BlogContext;
