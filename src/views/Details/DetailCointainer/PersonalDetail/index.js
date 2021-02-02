import React, { useState,useEffect } from "react";
import Button from "../../../../ui/Button";
import InputField from "../../../../ui/InputField";
import useForm from "./formik";



const PersonalDetail = () => {
  const [attempt, setAttempt] = useState(false);
  const [backspace, setBackSpace] = useState(false);
  const formik = useForm();

  useEffect(()=>{
    document.getElementById("dob").onkeydown=(e)=>{
      if (! ((e.keyCode>=48 && e.keyCode<=57) || e.keyCode===8 || e.keyCode===191)){
        e.preventDefault();
      }
    
    }
  },[])

  const handleSubmit = () => {
    formik.handleSubmit();
    setAttempt(true);
  };


  const getHandler = (field) => {
    switch (field) {
      case "dob":
        return (e) => {
          //since string of length 3 will be 2 after backspace it should'nt add `/` 
          if (!backspace) {
            const proxy = new Proxy(e, validator);
            proxy.target.value = addSlashes(e.target.value); //add automatic slashes in input 
          }
          formik.handleChange(e);
        }

      default:
        return (e) => {
          formik.handleChange(e);
        }
    }
  }

  return (
    <div style={{ justifySelf: "center" }} className="fadeInUpDetails">
      <div className="titleDetails ">
        Personal
        <span style={{ color: "var(--primaryClr)" }}> Details</span>
      </div>

      <div className="fieldsDetails">
        {Object.keys(formik.values).map((field, i) =>
          <InputField
            onChange={getHandler(field)}
            value={formik.values[field]}
            error={formik.errors[field]}

            attempt={attempt}
            id={field}
            name={field}
            placeholder={prompt[field]}
            setAttempt={setAttempt}
            key={i}
            type={type[field]}
            onKeyDown={(e) => {
              if (e.keyCode === 8) setBackSpace(true);
              else setBackSpace(false);
            }
            }
          />



        )}
      </div>
      <div className="centerButton">
        <Button onClick={handleSubmit} style={{ width: "180px", height: "50px" }}>
          Next
        </Button>
      </div>
      {/* this is only for animation */}
      <div className="imgBackgroundDetails"></div>
    </div>
  );
};


const prompt = { pan: "Pan No", name: "Your Name", mobile: "Moblie No", dob: "DOB dd/mm/yyyy" }

const type={pan:'text',name:'text',mobile:'number',dob:'text'}


const addSlashes = (date) => {
  const numChars = date.length;
  if (numChars>10) return date.slice(0,10);
  if (numChars === 2 && date[numChars - 1] === '/') date = '0' + date;
  else if (numChars === 5 && date[numChars - 1] === '/') date = date.slice(0, 3) + '0' + date.slice(3);
  else if (numChars === 2 || numChars === 5) {
    date += '/';
  }
  else if ((numChars === 4 || numChars === 7) && date[numChars -1] ==='/' ) return date.slice(0,numChars-1);

  return date;
}

const validator = {
  get(target, key) {
    if (typeof target[key] === 'object' && target[key] !== null) {
      return new Proxy(target[key], validator)
    } else {
      return target[key];
    }
  },
  set(target, key, value) {
    if (key === 'value') {
      target[key] = value;
    }
    return true;
  }
}



export default PersonalDetail;
