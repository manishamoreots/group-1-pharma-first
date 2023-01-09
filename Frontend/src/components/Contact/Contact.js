import React from "react";
import { Form, Input, TextArea, Button, Select, Container, Grid } from "semantic-ui-react";
import "./contact.css";
import MapModel from "../Modal/MapModel";
import Loader from "../Loader/Loader";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const genderOptions = [
	{ key: "m", text: "Male", value: "male" },
	{ key: "f", text: "Female", value: "female" },
	{ key: "o", text: "Other", value: "other" },
];

const Contact = () => {
	let navigate = useNavigate();

	const sendMessage = () => {
		swal({ text: "Message Send to Admin", icon: "success" });
		navigate("/");
	};
	return (
		<>
			<Container>
				<h2 style={{ marginBottom: 40, textAlign: "center" }}>Contact Us</h2>
				<div className="contact-us">
					<Grid>
						<Grid.Row>
							<Grid.Column width={8}>
								<MapModel contact={true} />
							</Grid.Column>
							<Grid.Column width={7}>
								<Form>
									<Form.Group widths="equals" className="firstname-lastname">
										<Form.Field
											id="form-input-control-first-name"
											control={Input}
											label="First name"
											placeholder="First name"
											required
										/>
										<Form.Field
											id="form-input-control-last-name"
											control={Input}
											label="Last name"
											placeholder="Last name"
											required
										/>
									</Form.Group>
									<Form.Group widths="equals" className="firstname-lastname">
										<Form.Field control={Input} label="Mobile no" placeholder="Mobile no" />
										<Form.Field
											control={Select}
											options={genderOptions}
											label={{
												children: "Gender",
												htmlFor: "form-select-control-gender",
											}}
											placeholder="Gender"
											search
											searchInput={{ id: "form-select-control-gender" }}
											required
										/>
									</Form.Group>
									<Form.Field
										id="form-input-control-error-email"
										control={Input}
										label="Email"
										placeholder="...@otssolutions.com"
										required
									/>
									<Form.Field
										id="form-textarea-control-opinion"
										control={TextArea}
										label="Message"
										placeholder="Type Your Message here"
										required
									/>

									<Form.Field
										id="form-button-control-public"
										control={Button}
										content="Send Message"
										secondary
										onClick={sendMessage}
									/>
								</Form>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</Container>
		</>
	);
};

export default Loader(Contact);
