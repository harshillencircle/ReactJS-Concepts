import React, { Fragment } from 'react'

function Portfolio() {
    return (
        <Fragment>
            <div className='text-3xl text-gray-500 font-bold text-center'>Portfolio</div>
            <div className='w-300px h-auto flex flex-col items-center justify-center bg-amber-50 shadow-2xl'>
                <div className=''>
                    <img src="https://picsum.photos/200/300" alt="portfolio" />
                </div>
                <div>
                    <h3 className='text-2xl text-gray-700 font-bold'>Name</h3>
                </div>
                <div>
                    <p className='text-gray-500 font-semibold'>Bio</p>
                </div>
            </div>
        </Fragment>
    )
};

export default Portfolio;