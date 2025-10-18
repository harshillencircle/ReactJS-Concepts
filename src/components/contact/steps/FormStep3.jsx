import { useFormikContext } from 'formik';
import React from 'react'

const FormStep3 = () => {
    const { values } = useFormikContext();

    return (
        <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Step3: Review</h3>
            <div className="space-y-4">
                <div>
                    <span className="font-medium text-gray-700">Name:</span>{' '}
                    <span className="text-gray-900">{values.name}</span>
                </div>
                <div>
                    <span className="font-medium text-gray-700">Email:</span>{' '}
                    <span className="text-gray-900">{values.email}</span>
                </div>
                <div>
                    <span className="font-medium text-gray-700">Username:</span>{' '}
                    <span className="text-gray-900">{values.username}</span>
                </div>
                <div>
                    <span className="font-medium text-gray-700">Password:</span>{' '}
                    <span className="text-gray-900">{values.password}</span>
                </div>
                <div>
                    <span className="font-medium text-gray-700">Address:</span>{' '}
                    <span className="text-gray-900">{values.address}</span>
                </div>
                <div>
                    <span className="font-medium text-gray-700">City:</span>{' '}
                    <span className="text-gray-900">{values.city}</span>
                </div>
                <div>
                    <span className="font-medium text-gray-700">ZIP Code:</span>{' '}
                    <span className="text-gray-900">{values.zip}</span>
                </div>
            </div>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            <p className='text-green-600 font-semibold'>Confirm And Submit</p>
        </div>
    )
}

export default FormStep3;