import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProducts } from '../../redux/slices/productslice/ProductSlice';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, items.length]);

    const product = items.find(item => item.id === parseInt(id));

    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className='flex flex-col justify-center items-center space-y-4'>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-72 h-auto object-contain rounded-md"
                    />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
                        <p className="text-gray-500 text-sm mb-1 capitalize">
                            Category: {product.category}
                        </p>
                        <p className="text-gray-700 text-base mb-4">{product.description}</p>
                    </div>

                    {/* Price & Rating */}
                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <span className="text-xl font-semibold text-green-600">
                                ${product.price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Link
                to="/product"
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
            >
                Go to Product List
            </Link>
        </div>
    )
}

export default ProductDetails