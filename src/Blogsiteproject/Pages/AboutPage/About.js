import React from "react";
import styles from "./About.module.css";
function About() {
	return (
		<div className={styles.container}>
			<h1>About</h1>
			<p className={styles.aboutParagraph}>
				This is my first project of using React JS. So I hope you understand if there are understandable a little
				error includes please ignore it.My name is Naing Aung Zaw . Developer abb is Dev_Adriam.
			</p>
			<p>You can contact here!</p>
			<a href="" onClick={() => (window.location = "mailto:naingaung9863@gmail.com")}>
				Send Email
			</a>
		</div>
	);
}

export default About;
