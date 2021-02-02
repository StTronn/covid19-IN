import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import routes from "../../../../router/webRoutes";

import validationSchema from "./validate.js";


const useForm = () => {
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			bNo: "",
			ifsc: "",
			bName: "",
		},
		validationSchema,
		onSubmit: (values) => {
			history.push(routes.LOGIN);
		},
	});
	return formik;
};

export default useForm;
