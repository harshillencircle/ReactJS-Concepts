import React, { useState } from 'react'

function ReuseForm({ label, onSubmit }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === "") {
            return;
        }
        onSubmit(value);
        setValue('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    ReuseForm
                </div>

                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {label}
                            </label>
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                aria-label={label}
                                placeholder={`Enter ${label}`}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="text-[12px] text-red-600 hover:bg-red-600 hover:text-white border-2 font-bold border-red-600 rounded-sm cursor-pointer px-2 py-1 uppercase"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ReuseForm