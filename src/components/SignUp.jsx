import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
function SignUp (){

    const[fname, setFname] =  useState("");
    const[email, setEmail] =  useState("");
    const[password, setPassword] =  useState("");
    const[cpassword, setCpassword] =  useState("");
    const [errors, setErrors] = useState({});
    function fullName (e){
        setFname(e.target.value);
      };
    
      function emailId(e){
        setEmail(e.target.value);
      };
    
      function pass(e){
        setPassword(e.target.value);
      };
    
      function cpass(e){
        setCpassword(e.target.value);
      };
     
    //   now validating the fields
    function validate(){
        const errors = {};
        if(fname === '' && 
            email === '' &&
            password === '' &&
            cpassword === ''){
          errors.eMsg = 'Error : All fields are required to proceed !';
        }
        else if(email === ''){
          errors.eMsg = 'Error : Email id is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.eMsg = 'Error : Please enter valid email id !';
        }
        else if (password === '') {
          errors.eMsg = 'Error : Password cannot be blank';
        } else if (password.length < 6 && password !== cpassword) {
          errors.eMsg = "Error : Please Make sure your password and confirm password match !";
        }
        else{
            setFname('');
            setEmail('');
            setPassword('');
            setCpassword('');
            errors.sMsg = "Successfully Created !"
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
      
      function getSetGo(e){
        e.preventDefault();
        validate();
    }



    return (
        <div className="parent">
            {/* this is content for left side */}
            <div className="left-child">
                <div className="left-child-text">
                <h2>Find 3D Objects, Mockups and illustration here</h2>
                </div>

                {/* <div className="left-child-image">
                    <img src="leftside.png" alt="bg-img" />
                </div> */}
            </div>


            <div className="right-child card pb-0 mb-0">
           
              <div className="container">
              <div className="card-header border-0 bg-white">
               <h4>Create Account</h4>
               </div>
               <div className="card-body border-0">
                <div className="d-flex social-media fw-bold">
                    <p>
                    <FontAwesomeIcon className="g-icon" icon={faGoogle} />
                        Sign up with Google</p>
                    <p className="mx-5">
                    <FontAwesomeIcon className="f-icon" icon={faFacebook} />
                        Sign up with Facebook</p>
                </div>
                <p className="or">- or -</p>

<div className="d-flex">
<div className="left-child-image">
                    <img src="leftside.png" alt="bg-img" />
                </div>
                <form className="form-control border-0">
                    <input className="form-control" type="text" name="fname" id="fname" value={fname} onChange={fullName} placeholder="Full Name"/>
                    <input className="form-control" type="text" name="email" id="email" value={email} onChange={emailId} placeholder="Enter Email"/>
                    <input className="form-control" type="text" name="password" id="password" value={password} onChange={pass} placeholder="Enter Password"/>
                    <input className="form-control" type="text" name="cpassword" id="cpassword" value={cpassword} onChange={cpass} placeholder="Confirm Password"/>
                    <div className="text-center">
                    <button onClick={getSetGo} className="btn btn-primary">Create Account</button>
                    </div>
                </form>
                </div>
                <div className="text-center">
                    <p className="fs-5 fw-bold mt-3 text-success s-msg">{errors.sMsg}</p>
                    <p className="fs-5 fw-bold mt-3 text-danger s-msg">{errors.eMsg}</p>
                    {/* Error : Please Make sure your password and confirm password match ! */}
                </div>
               </div>
              </div>
            </div>
        </div>
    )
}

export default SignUp;