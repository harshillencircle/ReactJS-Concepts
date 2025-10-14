import { Fragment, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Task from './components/tasks/Task.jsx'

function App() {

  const bio = "Bio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo cumque recusandae eum aut animi vero impedit numquam possimus, non nesciunt, nobis laborum sapiente iure consequatur quia fugit similique aliquid autem."

  return (
    <Fragment>
      <Portfolio bio={bio} />
      <Task />

      <Router>
        <Routes>
          <Route path="/profile" element={<Portfolio bio={bio} />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </Router>
      
    </Fragment>

  )
}

export default App
