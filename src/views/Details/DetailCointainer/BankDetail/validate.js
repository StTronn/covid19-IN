import * as Yup from 'yup';
const bankRegExp = /^\d{11}$/;

const validationSchema = Yup.object({
	bNo: Yup.string()
		.matches(bankRegExp, 'Bank Acc No must be 11 digits')
		.required('Required'),

	ifsc: Yup.string()
		.matches(bankRegExp, 'IFSC code must be 11 digits')
		.required('Required'),

	bName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),

});


export default validationSchema;