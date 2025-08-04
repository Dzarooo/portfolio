import './App.css'
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Content from './components/Content';
import { useState, useRef } from 'react';

function App() {

  const firstBackground = useRef(null);
  const secondBackground = useRef(null);

  const [firstBackgroundActive, setFirstBackgroundActive] = useState(true);

  const [currentStyle, setCurrentStyle] = useState("home");
  const [nextStyle, setNextStyle] = useState("");

  const opacityVariants = {
    true: "opacity-100",
    false: "opacity-0"
  }

  const backgroundPresets = {
    home: [
      "radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%)",
      "radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%)",
      "radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%)",
      "radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%)",
      "radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%)",
      "radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%)",
      "radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)"
    ],
    aboutme: [
      "radial-gradient(at 80% 30%, hsla(28, 100%, 74%, 1) 0px, transparent 50%)",
      "radial-gradient(at 50% 20%, hsla(189, 100%, 56%, 1) 0px, transparent 50%)",
      "radial-gradient(at 100% 20%, hsla(355, 100%, 93%, 1) 0px, transparent 50%)",
      "radial-gradient(at 30% 60%, hsla(340, 100%, 76%, 1) 0px, transparent 50%)",
      "radial-gradient(at 30% 80%, hsla(22, 100%, 77%, 1) 0px, transparent 50%)",
      "radial-gradient(at 60% 90%, hsla(242, 100%, 70%, 1) 0px, transparent 50%)",
      "radial-gradient(at 20% 40%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)"
    ],
    projects: [
      "radial-gradient(at 30% 50%, hsla(28, 100%, 74%, 1) 0px, transparent 50%)",
      "radial-gradient(at 20% 100%, hsla(189, 100%, 56%, 1) 0px, transparent 50%)",
      "radial-gradient(at 80% 30%, hsla(355, 100%, 93%, 1) 0px, transparent 50%)",
      "radial-gradient(at 50% 80%, hsla(340, 100%, 76%, 1) 0px, transparent 50%)",
      "radial-gradient(at 40% 60%, hsla(22, 100%, 77%, 1) 0px, transparent 50%)",
      "radial-gradient(at 100% 60%, hsla(242, 100%, 70%, 1) 0px, transparent 50%)",
      "radial-gradient(at 20% 70%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)"
    ],
    technologies: [
      "radial-gradient(at 100% 80%, hsla(28, 100%, 74%, 1) 0px, transparent 50%)",
      "radial-gradient(at 40% 100%, hsla(189, 100%, 56%, 1) 0px, transparent 50%)",
      "radial-gradient(at 20% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%)",
      "radial-gradient(at 60% 100%, hsla(340, 100%, 76%, 1) 0px, transparent 50%)",
      "radial-gradient(at 80% 0%, hsla(22, 100%, 77%, 1) 0px, transparent 50%)",
      "radial-gradient(at 0% 80%, hsla(242, 100%, 70%, 1) 0px, transparent 50%)",
      "radial-gradient(at 20% 30%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)"
    ],
    sitesource: [
      "radial-gradient(at 0% 80%, hsla(28, 100%, 74%, 1) 0px, transparent 50%)",
      "radial-gradient(at 100% 20%, hsla(189, 100%, 56%, 1) 0px, transparent 50%)",
      "radial-gradient(at 50% 40%, hsla(355, 100%, 93%, 1) 0px, transparent 50%)",
      "radial-gradient(at 80% 70%, hsla(340, 100%, 76%, 1) 0px, transparent 50%)",
      "radial-gradient(at 10% 20%, hsla(22, 100%, 77%, 1) 0px, transparent 50%)",
      "radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%)",
      "radial-gradient(at 100% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)"
    ]
  }

  const setBackground = (newValue) => {
    setCurrentStyle(newValue);
  }

  const updateBackgroundDynamically = (newValue) => {
    if (firstBackgroundActive) {
      setNextStyle(newValue);
    }
    else {
      setCurrentStyle(newValue);
    }
    setFirstBackgroundActive(!firstBackgroundActive);
  }

  return (
    <div className="relative min-h-[100vh] w-full flex overflow-hidden">

      <div className={`absolute inset-0 transition-opacity duration-1000 ${opacityVariants[firstBackgroundActive]}`}
        ref={firstBackground}
        style={{
          backgroundColor: "hsla(0, 100%, 50%, 1)",
          backgroundImage: backgroundPresets[currentStyle]?.join(", "),
          zIndex: 0,
        }}
      />

      <div className={`absolute inset-0 transition-opacity duration-1000 ${opacityVariants[!firstBackgroundActive]}`}
        ref={secondBackground}
        style={{
          backgroundColor: "hsla(0, 100%, 50%, 1)",
          backgroundImage: backgroundPresets[nextStyle]?.join(", "),
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full h-full">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Content setBackground={setBackground} updateBackground={updateBackgroundDynamically} />} />
            <Route path="/home" element={<Content setBackground={setBackground} updateBackground={updateBackgroundDynamically} />} />
            <Route path="/aboutme" element={<Content setBackground={setBackground} updateBackground={updateBackgroundDynamically} />} />
            <Route path="/projects" element={<Content setBackground={setBackground} updateBackground={updateBackgroundDynamically} />} />
            <Route path="/technologies" element={<Content setBackground={setBackground} updateBackground={updateBackgroundDynamically} />} />
            <Route path="/sitesource" element={<Content setBackground={setBackground} updateBackground={updateBackgroundDynamically} />} />

          </Routes>
        </HashRouter>
      </div>
    </div>
    // <div className="min-h-[100vh] w-full flex" style={backgroundStyle}>
    //   <HashRouter>
    //     <Routes>
    //       <Route path="/" element={<Content updateBackground={updateBackgroundDynamically}/>} />
    //       <Route path="/home" element={<Content updateBackground={updateBackgroundDynamically}/>} />
    //       <Route path="/aboutme" element={<Content updateBackground={updateBackgroundDynamically}/>} />
    //       <Route path="/projects" element={<Content updateBackground={updateBackgroundDynamically}/>} />
    //       <Route path="/technologies" element={<Content updateBackground={updateBackgroundDynamically}/>} />
    //       <Route path="/sitesource" element={<Content updateBackground={updateBackgroundDynamically}/>} />
    //     </Routes>
    //   </HashRouter>
    // </div>
  )
}

export default App
