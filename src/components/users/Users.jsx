import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Step : 1
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then((res) => res.json())
        // .then((data) => setUsers(data))
        // .catch((err) => console.error(err))

        // Step : 2
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data);

                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-bold text-gray-600">Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div className='text-lg text-gray-500 font-bold '>Users Data</div  >

            <div className="flex flex-wrap justify-center items-center space-x-6">
                {users.map((user, index) => (
                    <div className='w-[350px] h-auto flex flex-col justify-center items-start bg-gray-50 shadow-2xl p-4 hover:scale-105 transition-all duration-300 mt-6' key={index}>
                        <div>
                            <h3 className='text-sm text-gray-500 font-semibold'><span className="text-sm text-gray-600 font-bold">Name: </span>{user.name}</h3>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-500 font-semibold'><span className="text-sm text-gray-600 font-bold">Username: </span>{user.username}</h3>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-500 font-semibold'><span className="text-sm text-gray-600 font-bold">Email: </span>{user.email}</h3>
                        </div>
                        <div>
                            <span className="text-sm text-gray-600 font-bold">Address: </span>
                            <h3 className='text-sm text-gray-500 font-semibold pl-5'><span className="text-sm text-gray-600 font-bold"> Street: </span>{user.address.street}</h3>
                            <h3 className='text-sm text-gray-500 font-semibold pl-5'><span className="text-sm text-gray-600 font-bold"> Suite: </span>{user.address.suite}</h3>
                            <h3 className='text-sm text-gray-500 font-semibold pl-5'><span className="text-sm text-gray-600 font-bold"> City: </span>{user.address.city}</h3>
                            <h3 className='text-sm text-gray-500 font-semibold pl-5'><span className="text-sm text-gray-600 font-bold"> Zipcode: </span>{user.address.zipcode}</h3>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-500 font-semibold'><span className="text-sm text-gray-600 font-bold">Phone: </span>{user.phone}</h3>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-500 font-semibold'><span className="text-sm text-gray-600 font-bold">Website: </span>{user.website}</h3>
                        </div>
                        <div>
                            <span className="text-sm text-gray-600 font-bold">Company: </span>
                            <h3 className='text-sm text-gray-500 font-semibold pl-5'><span className="text-sm text-gray-600 font-bold"> Name: </span>{user.company.name}</h3>
                            <h3 className='text-sm text-gray-500 font-semibold pl-5'><span className="text-sm text-gray-600 font-bold"> CatchPhrase: </span>{user.company.catchPhrase}</h3>
                            <h3 className='text-sm text-gray-500 font-semibold pl-5'><span className="text-sm text-gray-600 font-bold"> BS: </span>{user.company.bs}</h3>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users;