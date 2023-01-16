import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { SignWithGoogle } from "../Reducer/authReducer";
import { useDispatch } from "react-redux";
const SignByGoogle = () => {
	const dispatch = useDispatch();
	function onSuccessfullyValidation(response) {
		const userDetails = jwt_decode(response.credential);
		dispatch(SignWithGoogle(userDetails));
	}
	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id: "719191923496-6cf0b7u4gb3u8e2igj2l9po3jaittlh6.apps.googleusercontent.com",
			callback: onSuccessfullyValidation,
		});

		google.accounts.id.renderButton(document.getElementById("sign-in"), {
			theme: "outline",
			size: "large",
		});
	});

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "10%",
			}}
		>
			<div id="sign-in"></div>
		</div>
	);
};

export default SignByGoogle;
