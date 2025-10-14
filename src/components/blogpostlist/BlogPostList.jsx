import { Fragment, useState } from "react";
import BlogPost from "../blogpost/BlogPost";

function BlogPostList() {
    const [blogposts, setBlogPosts] = useState([
        {
            title: 'Getting Started with React',
            content: 'React is a JavaScript library for building user interfaces. In this post, we explore how to set up your first React app using Vite or Create React App.'
        },
        {
            title: 'Understanding useState Hook',
            content: 'The useState hook allows you to add state to functional components. Learn how to use it to build interactive UIs with examples.'
        },
        {
            title: 'JavaScript ES6 Features You Should Know',
            content: 'ES6 brought many improvements to JavaScript, including arrow functions, template literals, destructuring, and more. This post covers the most useful ones for developers.'
        },
        {
            title: 'CSS Grid vs Flexbox',
            content: 'Both CSS Grid and Flexbox are powerful layout systems. Discover the differences, when to use each, and how to combine them effectively.'
        },
        {
            title: 'How to Manage State in React Apps',
            content: 'State management is crucial in complex applications. This article introduces local state, context API, and third-party libraries like Redux and Zustand.'
        },
        {
            title: 'Deploying Your React App to Netlify',
            content: 'Once your React app is ready, it’s time to deploy! Learn how to push your code to GitHub and host your site for free using Netlify.'
        }
    ]);

    const handleBlogDelete = (indexBlogDelete) => {
        const deleteBlogPost = blogposts.filter((blogpost) => blogpost !== indexBlogDelete);
        setBlogPosts(deleteBlogPost);
    }

    return (
        <Fragment>
            <div className='flex justify-center items-center text-lg text-gray-500 font-bold mt-4'>
                Blog Post List
            </div>
            <div className="flex flex-wrap justify-center items-center">
                {blogposts.map((blogpost, index) => (
                    <BlogPost
                        key={index}
                        title={blogpost.title}
                        content={blogpost.content}
                        onDelete={() => handleBlogDelete(blogpost)}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default BlogPostList;