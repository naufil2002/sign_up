import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Login = () => {

  const history = useNavigate();

  const [inpvalue, setInputval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  console.log(inpvalue);

  const getdata = (e) => {

    const { value, name } = e.target;

    setInputval(() => {
      return {
        ...inpvalue,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpvalue;
    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter valid email address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length must be greater than 5");
    } else {
     
      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el,k)=>{
          return el.email === email && el.password === password
        });

        if(userlogin.length === 0){
          alert("invalid details")
        } else {
          console.log("user logged in succesfully");

          localStorage.setItem("user_login",JSON.stringify(userlogin))

          history("/details")
        }
      }

    }
  };

  return (
    <>
    <Header />
      <div className="container text-center mt-3">
        <section>
          <div className="left-data mt-3 p-3  d-flex flex-column align-items-center" >
            <h3 className="text-center ">Sign In</h3>
            <Form style={{ width: "50%" }}>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 "
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Button 
                variant="primary"
                className="mt-3 mb-5 "
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              ><img src="./submit.png" style={{ maxWidth: 50 }}/>
              </Button>
            </Form>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
