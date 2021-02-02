const validate = (values) => {
	const errors = {};
	if (!values.email) errors.email="Required"
	else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Invalid Email adress";
	}

	if (!values.password) {
		errors.password = "Required";
	} else if (values.password.length<8)
		errors.password='Must cointain at least 8 charachters'
	return errors;
};

export default validate;
