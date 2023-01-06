import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Authcontext";
function Proctect({ children }) {
	const auth = useAuth();
	if (auth.user) {
		return children;
	} else {
		return <Navigate to="/login" />;
	}
}

export default Proctect;
