import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from './Sidebar'
import Home from '../sites/Home'
import AboutMe from '../sites/AboutMe'
import Projects from '../sites/Projects'
import SiteSource from '../sites/SiteSource'
import Technologies from '../sites/Technologies'
import { useRef, useEffect, useState } from "react";


const Content = ({ setBackground, updateBackground }) => {

    const [firstLoad, setFirstLoad] = useState(true);

    const location = useLocation();

    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const technologiesRef = useRef(null);
    const siteSourceRef = useRef(null);

    const scrollToSection = () => {
        const hash = location.pathname;

        switch (hash) {
            case "/home":
                if (!firstLoad) updateBackground("home");
                else setBackground("home");
                homeRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "/aboutme":
                if (!firstLoad) updateBackground("aboutme");
                else setBackground("aboutme");
                aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "/projects":
                if (!firstLoad) updateBackground("projects");
                else setBackground("projects");
                projectsRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "/technologies":
                if (!firstLoad) updateBackground("technologies");
                else setBackground("technologies");
                technologiesRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "/sitesource":
                if(!firstLoad) updateBackground("sitesource");
                else setBackground("sitesource");
                siteSourceRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                if (!firstLoad) updateBackground("home");
                else setBackground("home");
                homeRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
        }

        setFirstLoad(false);
    };

    useEffect(() => {
        scrollToSection();
    }, [location]);

    return (
        <>
            <Sidebar />
            <div className="h-screen w-calc(100vw-45px) overflow-y-scroll ml-[45px] snap-y snap-mandatory [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                <section ref={homeRef} className="snap-start h-screen w-full">
                    <Home />
                </section>

                <section ref={aboutMeRef} className="snap-start h-screen w-full">
                    <AboutMe />
                </section>

                <section ref={projectsRef} className="snap-start h-screen w-full">
                    <Projects />
                </section>

                <section ref={technologiesRef} className="snap-start h-screen w-full">
                    <Technologies />
                </section>

                <section ref={siteSourceRef} className="snap-start h-screen w-full">
                    <SiteSource />
                </section>

            </div>
        </>
    )
}

export default Content;