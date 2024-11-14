import React, { useState } from 'react';
import upload from '../../assets/upload.png';
import './AddProduct.css';
const AddProduct = () => {
    
    const [image,setImage] = useState(false);
    const [productDetail,setproductDetail] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setproductDetail({...productDetail,[e.target.name]:e.target.value})
    }

    const Add_Product = async ()=> {
        let responseData;
        let product = productDetail;
        let formData = new FormData();
        formData.append('product',image)
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }) 
        .then((res) =>res.json())
        .then((data) =>{responseData=data})

        if(responseData.success)
        {
            product.image = responseData.image_url
            console.log(product)
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            })
            .then((res)=> res.json())
            .then((data)=> {
                data.success ? alert("Đã thêm thành công") :alert("Thêm thất bại")
            })
        }
    }

    return (
        <div className='addproduct'>
            <div className="addproduct-itemfield">
                <p>Tiêu đề sản phẩm</p>
                <input value={productDetail.name} onChange={changeHandler} type='text' name='name' placeholder='Nhập tiêu đề'/>
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Giá cũ</p>
                    <input value={productDetail.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Nhập giá'/>
                </div>
                <div className="addproduct-itemfield">
                    <p>Giá mới</p>
                    <input value={productDetail.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Nhập giá'/>
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Danh mục sản phẩm</p>
                <select value={productDetail.category} onChange={changeHandler} name='category' className='add-product-selector'>
                    <option value="women">Nữ</option>
                    <option value="men">Nam</option>
                    <option value="kid">Trẻ em</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Thêm hình ảnh</p>
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload}  className='addproduct-img'/>
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden/>
            </div>
            <button onClick={Add_Product} className='product-btn'>Thêm sản phẩm</button>
        </div>
    )
}

export default AddProduct