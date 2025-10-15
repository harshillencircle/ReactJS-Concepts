import React, { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        skills: []
    });

    const [submittedData, setSubmittedData] = useState([]);
    const [error, setError] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleCheckboxChecked = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setFormData((prev) => ({
                ...prev,
                skills: [...prev.skills, value],
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                skills: prev.skills.filter((skill) => skill !== value),
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (formData.name === "") {
            newErrors.name = "Please Enter Your Name Proper !!";
        }

        if (!formData.email.includes('@') || !formData.email.includes(".")) {
            newErrors.email = "Please Enter a Valid Email Address !! ";
        }

        if (formData.password.length <= 6) {
            newErrors.password = "Password Must Be At Least 6 Characters !! ";
        }

        if (!formData.gender) {
            newErrors.gender = "Please Select Gender!!";
        }

        if (formData.skills.length === 0) {
            newErrors.skills = "Please Select At Least 1 Skill!!";
        }

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        setError({});

        setSubmittedData((prevdata) => [...prevdata, formData]);
        console.log("Formdata: ", formData);

        setFormData({
            name: '',
            email: '',
            password: '',
            gender: '',
            skills: []
        })
    }

    return (
        <div className="flex flex-col justify-center items-center m-4">
            <div className='text-lg text-gray-500 font-bold mt-4'>
                Registration Form
            </div>
            <div className="bg-gray-100 flex justify-center items-center px-8 py-4 shadow-md rounded">
                <form onSubmit={handleSubmit}>
                    <div className="mt-2 mb-4">
                        <label className="text-gray-600 font-bold">Name:
                            <div className="border border-gray-600 font-normal rounded-sm">
                                <input className="w-[400px] px-4 py-1" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" />
                            </div>
                            {error.name && <p className="text-red-600 text-sm mb-2">{error.name}</p>}
                        </label>
                    </div>

                    <div className="mt-2 mb-4">
                        <label className="text-gray-600 font-bold">Email:
                            <div className="border border-gray-600 font-normal rounded-sm">
                                <input className="w-[400px] px-4 py-1" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                            </div>
                            {error.email && <p className="text-red-600 text-sm mb-2">{error.email}</p>}
                        </label>
                    </div>

                    <div className="mt-2 mb-4">
                        <label className="text-gray-600 font-bold">Password:
                            <div className="border border-gray-600 font-normal rounded-sm">
                                <input className="w-[400px] px-4 py-1" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your password" />
                            </div>
                            {error.password && <p className="text-red-600 text-sm mb-2">{error.password}</p>}
                        </label>
                    </div>

                    <div className="mt-2 mb-4">
                        <label className="text-gray-600 font-bold">Gender:
                            <div className="font-normal space-x-4">
                                <label>
                                    <input className="mr-1" type="radio" name="gender" value='Male' checked={formData.gender === 'Male'} onChange={handleChange} />
                                    Male
                                </label>
                                <label>
                                    <input className="mr-1" type="radio" name="gender" value='Female' checked={formData.gender === 'Female'} onChange={handleChange} />
                                    Female
                                </label>
                            </div>
                            {error.gender && <p className="text-red-600 text-sm mb-2">{error.gender}</p>}
                        </label>
                    </div>

                    <div className="mt-2 mb-4">
                        <label className="text-gray-600 font-bold">Skills:
                            <div className="font-normal space-x-4">
                                <label>
                                    <input className="mr-1" type="checkbox" name="skills" value='ReactJS' checked={formData.skills.includes("ReactJS")} onChange={handleCheckboxChecked} />
                                    ReactJS
                                </label>
                                <label>
                                    <input className="mr-1" type="checkbox" name="skills" value='TailwindCSS' checked={formData.skills.includes("TailwindCSS")} onChange={handleCheckboxChecked} />
                                    TailwindCSS
                                </label>
                                <label>
                                    <input className="mr-1" type="checkbox" name="skills" value='NodeJS' checked={formData.skills.includes("NodeJS")} onChange={handleCheckboxChecked} />
                                    NodeJS
                                </label>
                                <label>
                                    <input className="mr-1" type="checkbox" name="skills" value='JavaScript' checked={formData.skills.includes("JavaScript")} onChange={handleCheckboxChecked} />
                                    JavaScript
                                </label>
                            </div>
                            {error.skills && <p className="text-red-600 text-sm mb-2">{error.skills}</p>}
                        </label>
                    </div>

                    <div>
                        <button className="text-[12px] text-red-600 hover:bg-red-600 hover:text-white border-2 font-bold border-red-600 rounded-sm cursor-pointer px-2 py-1 uppercase" type="submit">Submit</button>
                    </div>
                </form>
            </div>

            <div className="w-full mt-6 bg-gray-100 shadow-md px-6 py-4 rounded">
                <div className='text-lg text-gray-500 font-bold mb-2 text-center'>
                    Form Data
                </div>
                <div className="flex flex-wrap justify-center items-center space-x-4">
                    {submittedData.map((data, index) => (
                        <div className="w-[300px] mt-6 bg-gray-50 shadow-md px-6 py-4 rounded" key={index}>
                            <p className="text-md text-gray-500 font-semibold"><span className="text-md text-gray-500 font-bold">Name :</span> {data.name}</p>
                            <p className="text-md text-gray-500 font-semibold"> <span className="text-md text-gray-500 font-bold">Email :</span> {data.email}</p>
                            <p className="text-md text-gray-500 font-semibold"> <span className="text-md text-gray-500 font-bold">Password :</span> {data.password}</p>
                            <p className="text-md text-gray-500 font-semibold"> <span className="text-md text-gray-500 font-bold">Gender :</span> {data.gender}</p>
                            <p className="text-md text-gray-500 font-semibold"> <span className="text-md text-gray-500 font-bold">Skills :</span> {data.skills.join(", ")}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm;