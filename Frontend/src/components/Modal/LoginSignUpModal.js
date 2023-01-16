/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Image, Modal, Checkbox, Form, Label } from "semantic-ui-react";
import { Login, Register } from "../Reducer/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SignByGoogle from "./SignByGoogle";

const LoginSignUpModal = ({ title, btnType }) => {
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const { isAuthenticated, errors, loading } = useSelector((state) => state.auth.data);
	const [open, setOpen] = useState(false);
	const [condition, setCondition] = useState(true);

	useEffect(() => {
		if (isAuthenticated) {
			setTimeout(() => {
				setOpen(false);
				navigate("/dashboard");
			}, 1000);
		}
	}, [isAuthenticated]);

	useEffect(() => {
		if (!errors.message) {
			setTimeout(() => {
				setOpen(false);

				navigate("/");
			}, 1000);
		} else {
		}
	}, [errors]);

	const submit = (e) => {
		const form = new FormData(e.target);
		const loginSignUpDetails = {
			userId: uuidv4(),
			name: form.get("name"),
			email: form.get("email"),
			password: form.get("password"),
			mobile: form.get("mobile"),
		};
		if (loginSignUpDetails.name) {
			dispatch(Register(loginSignUpDetails));
		} else {
			dispatch(Login(loginSignUpDetails));
		}
	};

	return (
		<Modal size="small" onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} trigger={<div>{title}</div>}>
			<Modal.Header>{title}</Modal.Header>
			<Modal.Content image>
				<Image
					size="medium"
					src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1000"
					style={{ height: "auto" }}
				/>
				<Modal.Description>
					<Form onSubmit={submit}>
						{title === "Login" ? (
							<>
								{errors.msg ? (
									<Label basic color="red" pointing="below">
										{errors.msg}
									</Label>
								) : null}
								<Form.Input
									name="email"
									icon="user"
									iconPosition="left"
									label="Email"
									placeholder="Email"
									error={errors.msg ? true : false}
									required
								/>

								<Form.Input
									name="password"
									icon="lock"
									iconPosition="left"
									error={errors.msg ? true : false}
									label="Password"
									type="password"
									required
								/>

								<Button loading={loading} positive>
									{btnType}
								</Button>
								<br />
								<SignByGoogle />
							</>
						) : (
							<>
								{errors.message ? (
									<Label basic color="red" pointing="below">
										{errors.message}
									</Label>
								) : null}
								<Form.Input name="name" label="Name" type="text" required placeholder="Full Name" />
								<Form.Input
									name="email"
									label="Email"
									type="email"
									required
									placeholder="Email"
									error={errors.message ? true : false}
								/>
								<Form.Input name="mobile" label="Mobile" type="Number" required placeholder="Mobile" />
								<Form.Input
									name="password"
									icon="lock"
									iconPosition="left"
									label="Password"
									type="password"
									required
								/>
								<Form.Field>
									<Checkbox
										label="I agree to the Terms and Conditions"
										onClick={() => setCondition(!condition)}
									/>
								</Form.Field>
								<Button positive disabled={condition} loading={loading}>
									{btnType}
								</Button>

								<SignByGoogle />
							</>
						)}
					</Form>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default LoginSignUpModal;
