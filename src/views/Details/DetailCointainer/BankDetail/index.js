import React, { useState } from "react";

import useForm from "./formik";
import InputField from "../../../../ui/InputField";
import Button from "../../../../ui/Button";


const BankDetail = () => {
  const [attempt, setAttempt] = useState(false);
  const formik = useForm();

	const handleSubmit = () => {
		formik.handleSubmit();
		setAttempt(true);
  };

  return (
    <div style={{ justifySelf: "center" }} className="fadeInUpDetails">
      <div className="titleDetails">
        Bank
        <span style={{ color: "var(--primaryClr)" }}> Details</span>
      </div>

      <div className="fieldsDetails">
        {Object.keys(formik.values).map((field, i) =>
          <InputField
            onChange={formik.handleChange}
            value={formik.values[field]}
            error={formik.errors[field]}
            attempt={attempt}
            id={field}
            name={field}
            placeholder={prompt[field]}
            setAttempt={setAttempt}
            type={type[field]}
            key={i}
          />
        )}
      </div>
      <div className="centerButton">
        <Button
          onClick={handleSubmit}
          style={{ width: "180px", height: "50px" }}>
          Submit
        </Button>
      </div>
      {/* this is only for animation */}
      <div className="imgBackgroundDetails"></div>
    </div>
  );
};


const prompt = { bNo: "Bank Acc No", ifsc: "IFSC Code", bName: "Bank Name" }

const type={bNo:'number',ifsc:'number',bName:'text'}

export default BankDetail;
