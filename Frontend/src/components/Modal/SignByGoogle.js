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
			client_id: "95548258727-b3qlpk5j3sjjik2rme8p4cu278lm0nkm.apps.googleusercontent.com",
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
			}}
		>
			<div id="sign-in"></div>
		</div>
	);
};

export default SignByGoogle;
