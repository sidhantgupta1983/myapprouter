import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h1>Products :</h1>
            <h3>Every products are Below: </h3>
            <NavLink
                style={
                    ({isActive}) => {
                        return{
                            // backgroundColor : isActive ? 'yellow' : 'blue'
                            borderRadius : isActive ? "12px " : 'none'
                        }
                    }
                }
            to='/product/mobile' className="btn btn-primary">Mobile</NavLink>
            <NavLink
                style={
                    ({isActive}) => {
                        return{
                            backgroundColor : isActive ? 'yellow' : 'blue'
                        }
                    }
                }
            to='/product/laptop' className="btn btn-secondary">Laptop</NavLink>
            {/* <Link className='btn btn-success' to='/product/mobile'>Mobile</Link>
            <Link className='btn btn-primary' to='/product/laptop'>Laptop</Link> */}
            <Outlet />
        </div>
    )
}

export default Product;