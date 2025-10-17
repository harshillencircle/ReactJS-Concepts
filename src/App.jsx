import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import { Fragment } from 'react'
import ToDo from './components/todo/ToDo.jsx'

function App() {

  const bio = "Bio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo cumque recusandae eum aut animi vero impedit numquam possimus, non nesciunt, nobis laborum sapiente iure consequatur quia fugit similique aliquid autem."

  return (

    <Router>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path="/profile" element={<Portfolio bio={bio} />} />
          <Route path="/task" element={
            <Fragment>
              <Task />,
              <ToDo />
            </Fragment>
          } />
          <Route path='/blogpost' element={<BlogPostList />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/user' element={<Users />} />
          <Route path='/counter' element={
            <Fragment>
              <Counter1 />,
              <Counter2 />
            </Fragment>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App
