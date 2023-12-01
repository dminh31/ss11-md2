import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const { productID } = useParams()
    const [ProductDetail, setProductDetail] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => {
                let result = data.find((item) => {
                    return item.id == productID
                })
                setProductDetail(result.product)
            })
    }, [productID])
    return (
        <div>ProductDetail
            {ProductDetail.map((item) => {
                return <li>name: {item.name} price: {item.price} </li>
            })}
        </div>
    )
}
