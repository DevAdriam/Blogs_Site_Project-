import React from "react";
import Navbar from "./Blogsiteproject/Navbar/Navbar";
import Login from "./Blogsiteproject/Pages/Auth/Login";
import Create from "./Blogsiteproject/Pages/CreateBlog/Create";
import About from "./Blogsiteproject/Pages/AboutPage/About";
import Home from "./Blogsiteproject/Pages/Home/Home";

import { Routes, Route } from "react-router-dom";
import { BlogProvider } from "./Blogsiteproject/Context/Blogcontext";
import { AuthProvider } from "./Blogsiteproject/Context/Authcontext";
import Proctect from "./Blogsiteproject/Proctetedroute/Proctect";

function App() {
	return (
		<div>
			<BlogProvider>
				<AuthProvider>
					<Navbar />
					<Routes>
						<Route path="login" element={<Login />}></Route>
						<Route
							path="create"
							element={
								<Proctect>
									<Create />
								</Proctect>
							}
						></Route>
						<Route path="about" element={<About />}></Route>
						<Route path="/" element={<Home />}></Route>
					</Routes>
				</AuthProvider>
			</BlogProvider>
		</div>
	);
}

export default App;
