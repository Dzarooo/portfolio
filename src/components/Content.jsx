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

    const [isManualScrollingActive, setIsManualScrollingActive] = useState(true)
    const manualScrolling = useRef(false);

    const location = useLocation();
    const navigate = useNavigate();

    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const technologiesRef = useRef(null);
    const siteSourceRef = useRef(null);

    const scrollContainerRef = useRef(null);

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
                if (!firstLoad) updateBackground("sitesource");
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

    useEffect(() => {
        const sections = document.querySelectorAll("section[data-section]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.getAttribute("data-section");
                        if (manualScrolling.current) navigate(`/${sectionName}`);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    useEffect(() => {
        if (isManualScrollingActive) manualScrolling.current = true;
        else manualScrolling.current = false;
    }, [isManualScrollingActive]);

    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                setIsManualScrollingActive(true);
            }, 100);
        };

        scrollContainerRef.current.addEventListener("scroll", handleScroll);

        return () => {
            scrollContainerRef.current.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    return (
        <>
            <Sidebar setIsManualScrollingActive={setIsManualScrollingActive} />
            <div ref={scrollContainerRef} className="h-screen w-calc(100vw-45px) overflow-y-scroll ml-[45px] snap-y snap-mandatory [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                <section ref={homeRef} data-section="home" className="snap-start min-h-screen h-fit w-full">
                    <Home />
                </section>

                <section ref={aboutMeRef} data-section="aboutme" className="snap-start min-h-screen h-fit w-full">
                    <AboutMe />
                </section>

                <section ref={projectsRef} data-section="projects" className="snap-start min-h-screen h-fit w-full">
                    <Projects />
                </section>

                <section ref={technologiesRef} data-section="technologies" className="snap-start min-h-screen h-fit w-full">
                    <Technologies />
                </section>

                <section ref={siteSourceRef} data-section="sitesource" className="snap-start min-h-screen h-fit w-full">
                    <SiteSource />
                </section>

            </div>
        </>
    )
}

export default Content;