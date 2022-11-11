import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import CardProduct from '../../components/Products/CardProduct/CardProduct'
import { FakeDataProduct } from '../../components/Products/dataProducts'
const Store = () => {
    return (
        <>
            <Navbar />
            <CardProduct dataProducts={FakeDataProduct} />
            <Footer />
        </>
    )
}

export default Store