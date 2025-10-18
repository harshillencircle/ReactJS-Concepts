import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { validationStep1, validationStep2 } from '../../validation/ValidatonSchemas';
import FormStep1 from './steps/FormStep1';
import FormStep2 from './steps/FormStep2';
import FormStep3 from './steps/FormStep3';

const steps = ['Personal Information', 'Address', 'Review']

function ContactForm() {
    const [step, setStep] = useState(0);

    const validation = [validationStep1, validationStep2, null];

    const isLastStep = step === steps.length - 1;

    const handleNext = async (values, actions) => {
        const currentSchema = validation[step];
        if (currentSchema) {
            try {
                await currentSchema.validate(values, { abortEarly: false });
                setStep(step + 1);
            } catch (error) {
                const errors = {};
                error.inner.forEach(e => errors[e.path] = e.message);
                actions.setErrors(errors);
            }
        }
        else {
            setStep(step + 1);
        }
    };

    const handleBack = () => setStep(step - 1);

    return (
        <div className="flex flex-col justify-center items-center m-4">
            <div className='text-lg text-gray-500 font-bold mt-4'>
                Multi-Step Contact Form
            </div>
            <div className="w-xl p-6 rounded-lg shadow-lg">
                <Formik
                    initialValues={{ name: '', email: '', username: '', password: '', address: '', city: '', zip: '' }}
                    onSubmit={(values) => {
                        alert("Form Submitted!" + JSON.stringify(values, null, 2));
                    }}
                >
                    {formik => (
                        <Form>
                            {step === 0 && <FormStep1 />}
                            {step === 1 && <FormStep2 />}
                            {step === 2 && <FormStep3 />}

                            <div className="flex justify-between mt-6">
                                {step > 0 && <button type='button' onClick={handleBack} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded">Back</button>} {'  '}
                                {!isLastStep && (
                                    <button type='button' onClick={() => handleNext(formik.values, formik)} className="ml-auto px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded">Next</button>
                                )}
                                {isLastStep && <button type='submit' className="ml-auto px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded">Submit</button>}
                            </div>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

export default ContactForm;