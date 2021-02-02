import React, { useState } from "react";

import useForm from "./formik";
import InputField from "../../../ui/InputField";
import Button from "../../../ui/Button";

const LoginForm = () => {
	const [attempt, setAttempt] = useState(false);
	const formik = useForm();
	const handleSubmit = () => {
		formik.handleSubmit();
		setAttempt(true);
	};

	return (
		<div className="leftCointainer">
			<div>
				<div className="title">
					Welcome to
					<span style={{ color: "var(--primaryClr)" }}> Groww</span>
				</div>
				<div className="fields">
					{Object.keys(formik.values).map((field, i) =>
						<InputField
							onChange={formik.handleChange}
							value={formik.values[field]}
							error={formik.errors[field]}
							attempt={attempt}
							id={field}
							name={field}
							placeholder={prompt[field]}
							key={i}
							type={field==='password'?field:'text'}
							setAttempt={setAttempt}
						/>
					)}
				</div>
				<Button
					onClick={handleSubmit}
					style={{ width: "100%", height: "50px" }}
				>
					Continue
				</Button>
			</div>
		</div>
	);
};

const prompt = { email: "Your Email Address", password: "Password" }

export default LoginForm;
