const createBLog = (state, newBlog) => {
	return [...state, newBlog];
};

const DeleteBlog = (state, deleteBlog) => {
	const filteredBlogs = state.filter((blog) => {
		return blog !== deleteBlog;
	});

	return filteredBlogs;
};

const Blogreducer = (state, action) => {
	switch (action.type) {
		case "Blog_Create":
			return createBLog(state, action.payload);

		case "Blog_Delete":
			return DeleteBlog(state, action.payload);

		default:
			return;
	}
};

export default Blogreducer;
