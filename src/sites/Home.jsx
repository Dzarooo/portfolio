import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {

    const textArray = [
        "Hi!",
        "Cześć!",
        "Hola!"
    ]

    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = textArray[textIndex];
        let timeout;

        if (!isDeleting && charIndex <= currentFullText.length) {
            setCurrentText(currentFullText.substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 100);
        } else if (isDeleting && charIndex >= 0) {
            setCurrentText(currentFullText.substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex((prev) => prev - 1), 50);
        } else {
            timeout = setTimeout(() => {
                if (isDeleting) {
                    setTextIndex((prev) => (prev + 1) % textArray.length);
                    setIsDeleting(false);
                } else {
                    setIsDeleting(true);
                }
            }, 800);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, textArray]);

    const navigate = useNavigate();

    const scrollDown = () => {
        navigate("/aboutme");
    }

    return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-4">
            <div className="min-h-[10vh]"></div>
            <div className="flex-1 flex items-center justify-center flex-col">
                <h1 className="text-8xl">
                    {currentText}
                    <span className="animate-pulse">|</span>
                </h1>
                <h1 className="text-4xl">Let me introduce myself</h1>
            </div>
            <span onClick={() => { scrollDown() }} className="min-h-[10vh] material-symbols-outlined scale-200 mt-10 select-none cursor-pointer">
                arrow_downward
            </span>
        </div>
    )
}

export default Home;