import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from './Sidebar'
import Home from '../sites/Home'
import AboutMe from '../sites/AboutMe'
import Projects from '../sites/Projects'
import SiteSource from '../sites/SiteSource'
import Technologies from '../sites/Technologies'
import { useRef, useEffect } from "react";


const Content = () => {

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
                homeRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "/aboutme":
                aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "/projects":
                console.log("projects")
                projectsRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "/technologies":
                console.log("technologies")
                technologiesRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "/sitesource":
                console.log("sitesource")
                siteSourceRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                homeRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
        }
    };

    useEffect(() => {
        scrollToSection();
    }, [location]);

    return (
        <>
            <Sidebar />
            <div className="h-screen w-full overflow-y-scroll ml-[45px] snap-y snap-mandatory [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
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