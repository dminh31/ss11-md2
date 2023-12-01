import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data=>{
                setProducts([...data])
            })
    }, [])
    console.log(products);
    return (
        <div>Products
            {products.map((item)=>(
                <li key={item.id}>
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                </li>
            ))}
            <Outlet></Outlet>
        </div>
    )
}
