import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productslice/ProductSlice';
import { Link } from 'react-router-dom';

const Products = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <p>Products Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div className="flex flex-wrap justify-center items-center space-x-6">
            {items.map((product) => (
                <div key={product.id} className='w-[200px] h-[300px] flex flex-col justify-center items-center bg-gray-50 shadow-2xl p-4 hover:scale-105 transition-all duration-300 mt-6 space-y-2'>
                    <div className='items-start mt-2'>
                        <img src={product.image} alt={product.title} width="100" />
                    </div>
                    <div className='text-black'>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                        <p className='text-gray-700 font-bold' >${product.price}</p>
                    </div>

                </div>
            ))}
        </div >
    )
}

export default Products;