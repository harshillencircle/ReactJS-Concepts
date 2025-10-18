import React from 'react'
import InputField from '../inputfield/InputField'

const FormStep2 = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Step2: Address</h3>
            <div className="space-y-4">
                <InputField name="address" label="Address:" />
                <InputField name="city" label="City:" />
                <InputField name="zip" label="ZIP Code:" />
            </div>
        </div>
    )
}

export default FormStep2;