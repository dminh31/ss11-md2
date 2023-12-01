import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [nameInput, setNameInput] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setNameInput({ ...nameInput, [name]: value })
  }
  const handleClick = () => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        let result = data.find((item) => {
          return item.email == nameInput.email && item.password == nameInput.password
        })
        if (result) {
          alert("dang nhap thanh cong")
          navigate("/")
        } else {
          alert("tai khoan k ton tai")
        }
      })
      .catch(err => console.log("loiiii", err))
  }
  return (
    <>
      <label htmlFor="">email</label>
      <input onChange={handleChange} name='email' type="email" id="email" /> <br />
      <label htmlFor="">password</label>
      <input onChange={handleChange} name='password' type="password" id="password" /> <br />
      <button onClick={handleClick}>login</button>
    </>
  )
}
