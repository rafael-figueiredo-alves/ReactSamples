import { NavBar } from './shared/NavBar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { NewTask } from './pages/NewTask';

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
                <Route path='/newtask' element={<NewTask />} />
              </Routes>
            </Router>
          </article>
        </main>
      </div>
    </>
  )
}

export default App
