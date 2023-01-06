import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Authcontext";
import styles from "./Login.module.css";

function Login() {
	const [user, setUser] = useState({ username: "", password: "" });
	const Navigate = useNavigate();
	const auth = useAuth();

	const userHandler = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const userSubmit = (e) => {
		e.preventDefault();
		if (!user.username || !user.password) {
			alert("Please Fill Input Field");
		} else {
			auth.login(user);
			Navigate("/");
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<span className={styles.header}>Login</span>

				<form action="" className={styles.loginForm} autoComplete="off" onSubmit={userSubmit}>
					<input
						type="text"
						className={styles.loginInput}
						name="username"
						placeholder="Username"
						value={user.username}
						onChange={userHandler}
					/>
					<input
						type="password"
						name="password"
						className={styles.loginInput}
						placeholder="Password"
						value={user.password}
						onChange={userHandler}
					/>
					<button className={styles.loginButton}>Login</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
