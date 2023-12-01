import React from 'react'
import { useState } from 'react'

export default function AddStudent() {
  const [nameInput, setNameInput] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setNameInput({ ...nameInput, [name]: value })
  }
  const handleClick = () => {
    // gọi api để 
    // trước khi cho lên phải ktra email đã tồn tại chưa
    // phải gọi nó về ktra 
    fetch("http://localhost:4000/users")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        let result = data.find((item) => {
          return item.email == nameInput.email
        })
        console.log(result);
        if (result) {
          console.log("tai khoan hoc sinh da ton tai");
        } else {
          saveUser(nameInput)
          alert("them hoc sinh thanh cong")
          navigate("/")
        }
      })
    const saveUser = (user) => {
      fetch("http://localhost:4000/users", {
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
    <div>
      <h2>Add Student</h2>
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
      <button onClick={handleClick}>Add Student</button>
    </div>
  )
}
