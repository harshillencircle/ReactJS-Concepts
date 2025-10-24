import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Task from './components/tasks/Task.jsx'
import BlogPostList from './components/blogpostlist/BlogPostList.jsx'
import RegistrationForm from './components/registration/RegistrationForm.jsx'
import Users from './components/users/Users.jsx'
import NotFound from './components/notfound/NotFound.jsx'
import Blogs from './components/blogs/Blogs.jsx'
import BlogDetail from './components/blogdetail/BlogDetail.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Counter1 from './components/counters/Counter1.jsx'
import Counter2 from './components/counters/Counter2.jsx'
import { Fragment, Suspense, lazy } from 'react'
import ToDo from './components/todo/ToDo.jsx'
import Products from './components/products/Products.jsx'
// import ProductDetails from './components/products/ProductDetails.jsx'
import Parent from './components/parentchild/Parent.jsx'
import ContactForm from './components/contact/ContactForm.jsx'
import ProtectedRoute from "./navigation/ProtectedRoute.jsx";
import Login from './components/loginlogout/Login.jsx'
import Logout from './components/loginlogout/Logout.jsx'
import ToDoTask from './components/todo/ToDoTask.jsx'
import ReuseForm from './components/reuseform/ReuseForm.jsx'

const ProductDetails = lazy(() => import("./components/products/ProductDetails.jsx"));

function App() {

  const bio = "Bio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo cumque recusandae eum aut animi vero impedit numquam possimus, non nesciunt, nobis laborum sapiente iure consequatur quia fugit similique aliquid autem."

  return (

    <Router>
      <ThemeProvider>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>} >
          <Routes>
            <Route path='/' element={<Blogs />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
            <Route path="/profile" element={<Portfolio bio={bio} />} />
            <Route path="/task" element={
              <Fragment>
                <Task />,
                <ToDo />,
                <ToDoTask />
              </Fragment>
            } />
            <Route path='/blogpost' element={<BlogPostList />} />
            <Route path='/register' element={<RegistrationForm />} />
            <Route path='/form' element={<ReuseForm />} />
            <Route path='/user' element={<Users />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/counter' element={
              <Fragment>
                <Counter1 />,
                <Counter2 />,
                <Parent />
              </Fragment>
            } />
            <Route path='/product' element={<Products />} />
            <Route path='/product/:id'
              element={
                <ProtectedRoute>
                  <ProductDetails />
                </ProtectedRoute>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
            {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  )
}

export default App;
