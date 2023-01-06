import React, { useState, useContext } from "react";
import styles from "./Create.module.css";
import BlogContext from "../../Context/Blogcontext";
import { useNavigate } from "react-router-dom";
const initialValue = {
	title: "",
	type: "",
	description: "",
};
function Create() {
	const navigate = useNavigate();
	const [formValue, setformValue] = useState(initialValue);
	const { blogDispatch } = useContext(BlogContext);

	const formSubmitHandler = (e) => {
		e.preventDefault();
		let newBLog = {
			id: Math.random(),
			title: formValue.title,
			type: formValue.type,
			description: formValue.description,
		};

		if (!newBLog.title) {
			alert("Please fill Title");
		} else if (!newBLog.type) {
			alert("Please fill Type");
		} else if (!newBLog.description) {
			alert("Please fill description");
		} else {
			blogDispatch({ type: "Blog_Create", payload: newBLog });
			navigate("/");
		}
	};

	const formValueHandler = (e) => {
		const { name, value } = e.target;
		setformValue({ ...formValue, [name]: value });
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<span className={styles.header}></span>

				<form action="" className={styles.createForm} onSubmit={formSubmitHandler}>
					<input
						type="text"
						className={styles.createInput}
						name="title"
						placeholder="Title"
						value={formValue.title}
						onChange={formValueHandler}
					/>
					<input
						type="text"
						className={styles.createInput}
						name="type"
						placeholder="Type"
						value={formValue.type}
						onChange={formValueHandler}
					/>
					<textarea
						name="description"
						cols="30"
						rows="10"
						placeholder="Description"
						className={styles.createTextarea}
						value={formValue.description}
						onChange={formValueHandler}
					></textarea>

					<button className={styles.createButton}>Post</button>
				</form>
			</div>
		</div>
	);
}

export default Create;
