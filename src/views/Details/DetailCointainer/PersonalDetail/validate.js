import * as Yup from 'yup';
const phoneRegExp = /^\d{10}$/;
const panRegExp=/^([a-zA-Z0-9_-]){10}$/;
var dateRegExp =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;


const validationSchema= Yup.object({
	pan: Yup.string()
	.matches(panRegExp, 'Pan number is not valid')
	.required('Required'),

   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
	 .required('Required'),

   mobile: Yup.string()
   .matches(phoneRegExp, 'Phone number is not valid')
   .required('Required'),

	dob: Yup.string()
		.matches(dateRegExp,'Not valid format')
		.required('Required')
 });


export default validationSchema;