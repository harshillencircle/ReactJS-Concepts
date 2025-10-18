import React from 'react'
import InputField from '../inputfield/InputField'

const FormStep1 = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">
                Step 1: Personal Information
            </h3>

            <div className="space-y-4">
                <InputField name="name" label="Name" className="w-full" />
                <InputField name="email" type="email" label="Email Address" className="w-full" />
                <InputField name="username" label="Username" className="w-full" />
                <InputField name="password" type="password" label="Password" className="w-full" />
            </div>
        </div>
    )
}

export default FormStep1;