import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../Context/Authcontext";
function Navbar() {
	const auth = useAuth();
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.header}>
					<Link to="/">Blogs-Site</Link>
				</h1>

				<nav className={styles.navbar}>
					<NavLink to="/">Home</NavLink>
					<NavLink to="about">About</NavLink>
					<NavLink to="create">Create</NavLink>
					{auth.user ? (
						<button
							style={{
								padding: "7px 10px",
								background: "red",
								border: "none",
								color: "white",
								fontWeight: "bold",
								fontSize: "14px",
								borderRadius: "3px",
							}}
							onClick={() => auth.logout()}
						>
							Logout
						</button>
					) : (
						<NavLink to="login">Login</NavLink>
					)}
				</nav>
			</div>
		</div>
	);
}

export default Navbar;
