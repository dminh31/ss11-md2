import React, { useEffect, useState } from 'react'
import "./Register.scss"
// import { Navigate, useNavigate } from 'react-router-dom'
// import axios from "axios"
export default function Register() {
  // const navigate = useNavigate()
  const [nameInput, setNameInput] = useState({
    name: "",
    email: "",
    password: ""
  })

  // const [data, setData] = useState([])
  // const handleGetData = async () => {
  //   const response = await axios.get("http://localhost:3000/users")
  //   setData(f.data)
  // }
  // useEffect(() => {
  //   handleGetData()
  // }, [])
  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setNameInput({ ...nameInput, [name]: value })
  // }
  // const handleClick = async () => {
  //   let check = data.find((item) => item.email === nameInput.email)
  //   if (check) {
  //     alert("Tai khoan ton tai")
  //     return
  //   }
  //   const response = await axios.post("http://localhost:3000/users", nameInput)
  //   if (response.status === 201) {
  //     alert("Dang ky thanh cong")
  //     navigate("/login")
  //   }
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNameInput({ ...nameInput, [name]: value })
  }
  const handleClick = () => {
    // gọi api để 
    // trước khi cho lên phải ktra email đã tồn tại chưa
    // phải gọi nó về ktra 
    fetch("http://localhost:3000/users")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        let result = data.find((item) => {
          return item.email == nameInput.email
        })
        console.log(result);
        if (result) {
          console.log("tai khoan da ton tai");
        } else {
          //luu lại trên JSON server
          saveUser(nameInput)
          alert("dki thanh cong")
          navigate("/login")
        }
      })
    const saveUser = (user) => {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then()
        .catch(err => console.log(err))
    }

    console.log('name', nameInput);
  }
  return (
    <>
      <div className='register'>
        Register <br />
        <label className='' htmlFor="">username</label>
        <input
          style={{ border: "1px solid black" }}
          name='name'
          onChange={handleChange}
          type="text" /> <br />
        <label htmlFor="">email</label>
        <input
          name='email'
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          type="email" /> <br />
        <label htmlFor="">password</label>
        <input
          name='password'
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          type="password" /> <br />
        <button onClick={handleClick}>register</button>
      </div>
    </>
  )
}
