import React, { useEffect, useState } from 'react'

export default function List() {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/users")
            .then(res => res.json())
            .then(data => {
                console.log("11111", data)
                setUser(data[0])
            })
            .catch(err => console.log("loi roi con oiii", err))
    },[])
    return (
        <>
            <h2>List</h2>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }} >
                <table border={1} cellPadding={10} cellSpacing={10}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {user.map((item)=>{
                                return <td>{item.id}</td>,
                                    <td>{item.name}</td>,
                                    <td>{item.age}</td>
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
