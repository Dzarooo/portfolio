import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Content from './components/Content';

function App() {

  return (
    <div className="min-h-[100vh] w-full flex">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/home" element={<Content />} />
          <Route path="/aboutme" element={<Content />} />
          <Route path="/projects" element={<Content />} />
          <Route path="/technologies" element={<Content />} />
          <Route path="/sitesource" element={<Content />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
