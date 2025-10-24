import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import LayoutChallenge from './pages/LayoutChallenge'
import BugHunt from './pages/BugHunt'

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navigation">
          <h1>Junior Frontend Developer Assessment</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Challenge 1: Layout Fix</Link>
            <Link to="/bug-hunt" className="nav-link">Challenge 2: Bug Hunt</Link>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LayoutChallenge />} />
            <Route path="/bug-hunt" element={<BugHunt />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
