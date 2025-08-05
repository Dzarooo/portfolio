import { useNavigate } from "react-router-dom";

const Sidebar = ({ setIsManualScrollingActive }) => {

    const navigate = useNavigate();

    const navigateTo = (site) => {
        switch (site) {
            case "home":
                setIsManualScrollingActive(false);
                navigate("/home");
                break;
            case "aboutme":
                setIsManualScrollingActive(false);
                navigate("/aboutme");
                break;
            case "projects":
                setIsManualScrollingActive(false);
                navigate("/projects");
                break;
            case "technologies":
                setIsManualScrollingActive(false);
                navigate("/technologies");
                break;
            case "sitesource":
                setIsManualScrollingActive(false);
                navigate("/sitesource");
                break;
            default:
                setIsManualScrollingActive(false);
                navigate("/home");
                break;
        }
    }

    return (
        <div className="h-full flex items-center fixed w-[45px]">
            <div className="w-fit p-2 mt-2 mb-2 flex flex-col justify-center items-center gap-4">
                <div onClick={() => { navigateTo("home") }} className="relative flex justify-center items-center cursor-pointer select-none">
                    <div className="hover:bg-slate-900/25 absolute w-full h-full p-4 rounded-full transition-[transform,background-color]"></div>
                    <span className="material-symbols-outlined text-slate-800">home</span>
                </div>
                <div onClick={() => { navigateTo("aboutme") }} className="relative flex justify-center items-center cursor-pointer select-none">
                    <div className="hover:bg-slate-900/25 absolute w-full h-full p-4 rounded-full transition-[transform,background-color]"></div>
                    <span className="material-symbols-outlined text-slate-800">face_6</span>
                </div>
                <div onClick={() => { navigateTo("projects") }} className="relative flex justify-center items-center cursor-pointer select-none">
                    <div className="hover:bg-slate-900/25 absolute w-full h-full p-4 rounded-full transition-[transform,background-color]"></div>
                    <span className="material-symbols-outlined text-slate-800">work</span>
                </div>
                <div onClick={() => { navigateTo("technologies") }} className="relative flex justify-center items-center cursor-pointer select-none">
                    <div className="hover:bg-slate-900/25 absolute w-full h-full p-4 rounded-full transition-[transform,background-color]"></div>
                    <span className="material-symbols-outlined text-slate-800">folder_code</span>
                </div>
                <div onClick={() => { navigateTo("sitesource") }} className="relative flex justify-center items-center cursor-pointer select-none">
                    <div className="hover:bg-slate-900/25 absolute w-full h-full p-4 rounded-full transition-[transform,background-color]"></div>
                    <span className="material-symbols-outlined text-slate-800">map</span>
                </div>

            </div>
            <div className="h-full w-[1.5px] borderGradient"></div>
        </div>
    )

}

export default Sidebar;