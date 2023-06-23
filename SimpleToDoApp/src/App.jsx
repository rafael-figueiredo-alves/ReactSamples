import { NavBar } from './shared/NavBar'
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';

function App() {


  return (
    <>
      <div className="page">
        <main>
          <NavBar />

          <article className="content px-4">
            <Router>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<About />} />
                <Route path='/newtask' element={<p>NewTask</p>} />
              </Routes>
            </Router>
          </article>
        </main>
      </div>
    </>
  )
}

export default App
