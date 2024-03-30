import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Home = () => {

  const [inpvalue,setInputval] = useState({
    name:"",
    email:"",
    date:"",
    password:""
  })

  const [data,setData] = useState([])

  console.log(inpvalue);

  const getdata = (e)=>{
    // console.log(e.target.value)

    const {value,name} = e.target;
    // console.log(value,name);

    setInputval(()=>{
      return {
        ...inpvalue,
        [name]:value
      }
    })
  }

  const addData = (e)=>{
    e.preventDefault();
    // console.log(inpvalue)

    const {name,email,date,password} = inpvalue;

    if(name === ""){
      alert("name field is required")
    } else if(email === ""){
      alert("email field is required")
    } else if(!email.includes("@")){
      alert("please enter valid email address")
    } else if(date === ""){
      alert("date field is required")
    } else if(password === ""){
      alert("password field is required")
    } else if(password.length < 5){
      alert("password length must be greater than 5")
    } 
    else {
      console.log("data added succesfully")
      localStorage.setItem("useryoutube",JSON.stringify([...data,inpvalue]));
    }
  }

  return (
    <>
      <Header />
      <div className="container mt-2">
        <section>
          <div className="left-data mt-3 p-3 d-flex flex-column align-items-center">
            <h3 className="text-center">Sign Up</h3>
            <Form style={{ width: "50%" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name="date" onChange={getdata} type="date" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>
              <div className="text-center">
              <Button className="align-items-center" variant="primary" onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                <NavLink to="/login"><img src="./submit.png" style={{ maxWidth: 35 }} alt="submit" /></NavLink>
              </Button>
              </div>
            </Form>
            <p className="mt-3">Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
