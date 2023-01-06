import React, { useContext } from "react";
import BlogContext from "../Context/Blogcontext";
import styles from "./Blog.module.css";
import { useAuth } from "../Context/Authcontext";
function Blog() {
	const { blogs, blogDispatch } = useContext(BlogContext);
	const auth = useAuth();

	return (
		<div className={styles.blogsContainer}>
			<div className={styles.blogslist}>
				{blogs.map((blog) => {
					return (
						<div className={styles.blog} key={blog.id}>
							<span className={styles.blogTitle}>{blog.title}</span>
							<span className={styles.blogType}>{blog.type}</span>
							<p className={styles.blogDescription}>{blog.description}</p>
							{auth.user && (
								<button
									className={styles.blogDelete}
									onClick={() => blogDispatch({ type: "Blog_Delete", payload: blog })}
								>
									Delete
								</button>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Blog;
