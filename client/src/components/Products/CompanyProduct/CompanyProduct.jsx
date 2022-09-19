import React from 'react'
import { Link } from 'react-router-dom'
import { fakeDataCompanyProduct } from '../dataProducts'
const Product = (Products) => {
    return (
        <div className='w-full h-full bg-white space-y-4 py-5'>
            <h1 className='text-lg mb-3 md:mb-4 md:text-5xl text-center '>
                Laptop hàng đầu Việt Nam
            </h1>
            <hr className="border-black border-2 m-auto w-14" />
            <div className='container grid sm:grid-cols-2 md:grid-cols-3 p-2 gap-4 grid-cols-2'>
                {
                    fakeDataCompanyProduct.map((pro, idx) => {
                        return (
                            <Link to='/store' className=' hover:no-underline hover:text-black' key={idx}>
                                <div className='text-center rounded-xl transition ease-in hover:scale-105' key={idx}>
                                    <img src={pro.image} alt="" className='object-contain w-full sm:h-full h-[20vh]' />
                                    <div className='font-bold sm:text-2xl text-xs'>{pro.title}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Product