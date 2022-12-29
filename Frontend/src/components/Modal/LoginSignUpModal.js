import React, { useEffect, useState } from 'react';
import { Button, Image, Modal, Checkbox, Form, Label } from 'semantic-ui-react';
import { Login, Register } from '../Reducer/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const LoginSignUpModal = ({ title, btnType }) => {
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const { isAuthenticated, errors, users } = useSelector((state) => state.auth.data);
	const [open, setOpen] = useState(false);
	const [condition, setCondition] = useState(true);
	const [error, setError] = useState(null);
	console.log(users);
	useEffect(() => {
		if (errors.msg) {
			setError({ ...errors });
		}
	}, [errors]);

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/dashboard');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	const submit = (e) => {
		const form = new FormData(e.target);
		const loginSignUp = {
			userId: uuidv4(),
			name: form.get('name'),
			email: form.get('email'),
			password: form.get('password'),
			mobile: form.get('mobile'),
		};
		if (loginSignUp.name) {
			dispatch(Register(loginSignUp));
			setOpen(false);
		} else {
			dispatch(Login(loginSignUp));
		}
	};

	return (
		<Modal size="small" onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} trigger={<Button>{title}</Button>}>
			<Modal.Header>{title}</Modal.Header>
			<Modal.Content image>
				<Image
					size="medium"
					src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1000"
					style={{ height: 'auto' }}
				/>
				<Modal.Description>
					<Form onSubmit={submit}>
						{title === 'login' ? (
							<>
								<Form.Input
									name="email"
									icon="user"
									iconPosition="left"
									label="Email"
									placeholder="Email"
									error={error ? true : false}
									required
								/>
								{error ? (
									<Label basic color="red" pointing="below">
										Please enter a value
									</Label>
								) : null}
								<Form.Input
									name="password"
									icon="lock"
									iconPosition="left"
									error={error ? true : false}
									label="Password"
									type="password"
									required
								/>
								<Button positive>{btnType}</Button>
							</>
						) : (
							<>
								<Form.Input name="name" label="Name" type="text" required placeholder="Full Name" />
								<Form.Input name="email" label="Email" type="email" required placeholder="Email" />
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
								<Button positive disabled={condition}>
									{btnType}
								</Button>
							</>
						)}
					</Form>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default LoginSignUpModal;
