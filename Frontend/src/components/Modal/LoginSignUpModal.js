import React, { useState } from 'react';
import { Button, Image, Modal, Checkbox, Form } from 'semantic-ui-react';

const LoginSignUpModal = ({ title, btnType }) => {
	const [open, setOpen] = useState(false);
	const [condition, setCondition] = useState(true);

	const submit = (e) => {
		const form = new FormData(e.target);
		const loginSignUp = {
			name: form.get('name'),
			email: form.get('email'),
			password: form.get('password'),
			mobile: form.get('mobile'),
		};
		console.log(loginSignUp);
	};

	return (
		<Modal size="small" onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} trigger={<Button>{title}</Button>}>
			<Modal.Header>{title}</Modal.Header>
			<Modal.Content image>
				<Image
					size="medium"
					src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1000"
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
									required
								/>
								<Form.Input
									name="password"
									icon="lock"
									iconPosition="left"
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
