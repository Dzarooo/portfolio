import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const scrollDown = () => {
        navigate("/aboutme");
    }

    return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-4">
            <div className="min-h-[10vh]"></div>
            <div className="flex-1 flex items-center justify-center flex-col">
                <h1 className="text-8xl">Hi!</h1>
                <h1 className="text-4xl">Let me introduce myself</h1>
            </div>
            <span onClick={() => {scrollDown()}} className="min-h-[10vh] material-symbols-outlined scale-200 mt-10 select-none cursor-pointer">
                arrow_downward
            </span>
        </div>
    )
}

export default Home;