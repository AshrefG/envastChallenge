import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
     // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:8000/client/signup",
      data: {
        name,
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name"  value={name} onChange={(e) => setName(e.target.value)}  className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-block">Sign Up</button>
                        {/* display success message */}
                {register ? (
                <p className="text-success">You Are Registered Successfully</p>
                ) : (
                <p className="text-danger">You Are Not Registered</p>
                )}
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }