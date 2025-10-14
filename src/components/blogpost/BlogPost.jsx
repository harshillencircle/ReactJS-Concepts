function BlogPost({ title, content, onDelete }) {

    return (
        <div className="p-4">
            <div className="w-[300px] h-[250px] bg-gray-300 rounded p-4 shadow-sm space-y-4">
                <div className="text-lg text-gray-600 font-bold">
                    <h2>{title}</h2>
                </div>
                <div className='text-sm text-gray-500 font-semibold text-justify'>
                    <p>{content}</p>
                </div>
                <button onClick={onDelete} className="text-[12px] text-red-600 hover:bg-red-600 hover:text-white border-2 font-bold border-red-600 rounded-sm cursor-pointer px-2 py-1 uppercase">Delete</button>
            </div>
        </div>
    )
}

export default BlogPost;