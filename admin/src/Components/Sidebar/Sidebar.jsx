import React from 'react'
import { Link } from 'react-router-dom'
import addproduct from '../../assets/addproduct.png'
import listproduct from '../../assets/listproduct.png'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={addproduct} alt='' className='addicon'/>
                    <p>Thêm sản phẩm</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={listproduct} alt='' className='listicon'/>
                    <p>Danh sách sản phẩm</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar