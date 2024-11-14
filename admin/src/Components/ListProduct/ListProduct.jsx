import React, { useEffect, useState } from 'react';
import removeicon from '../../assets/remove.png';
import './ListProduct.css';

const ListProduct = () => {

    const [allproducts,setAllProduct] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res)=>res.json())
            .then((data) => {setAllProduct(data)});
    }

    useEffect(() => {
        fetchInfo();
    },[])


    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }
    return (
        <div className='listproduct'>
            <h1>Danh Sách Sản Phẩm</h1>
            <div className="listproduct-format-main">
                <p>Sản phẩm</p>
                <p>Tiêu đề</p>
                <p>Giá cũ</p>
                <p>Giá mới</p>
                <p>Danh mục</p>
                <p>Xóa</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product,index)=> {
                    return <>
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>{product.old_price.toLocaleString('it-IT')} VND</p>
                        <p>{product.new_price.toLocaleString('it-IT')} VND</p>
                        <p className='category'>{product.category}</p>
                        <img onClick={()=>{remove_product(product.id)}} src={removeicon} alt="" className="icon-remove" />
                    </div>
                    <hr/>
                    </>
                })}
            </div>
        </div>
    )
}

export default ListProduct