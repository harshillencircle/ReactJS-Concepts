import React, { Fragment } from 'react'
import ProfileImg from '../../assets/profile.jpg'

function Portfolio({bio}) {
    return (
        <Fragment>
            <div className='flex justify-center items-center gap-4'>
                <div className='w-[250px] h-auto flex flex-col justify-center items-center bg-white shadow-2xl p-4 hover:scale-105 transition-all duration-300'>
                    <div className='text-lg text-gray-500 font-bold '>Profile</div>
                    <div className='w-[100px] h-[100px] object-cover rounded-[50%] overflow-hidden'>
                        <img src={ProfileImg} alt="portfolio" />
                    </div>
                    <div>
                        <h3 className='text-xl text-gray-600 font-bold'>Harshil Limbasiya</h3>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500 font-semibold text-justify'>{bio}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Portfolio;