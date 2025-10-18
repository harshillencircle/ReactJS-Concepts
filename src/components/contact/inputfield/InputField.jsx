import { ErrorMessage, Field } from 'formik'
import React from 'react'

const InputField = ({ label, name, type = "text" }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <Field name={name} type={type} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <ErrorMessage name={name} component="div" className='text-red-500 text-sm mt-1' />
        </div>
    )
}

export default InputField;