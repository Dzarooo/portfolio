const Projects = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-10">
            <h1 className="text-6xl starWarsText">Featured projects</h1>
            <div className="flex gap-4 justify-center items-center flex-wrap w-[90vw]">

                <div className=" bg-black/40 rounded-xl border-slate-100 border-2 w-[300px] h-[370px] hover:[transform:translateY(-5%)_scale(1.05)] transition-[transform] z-0 hover:z-10">
                    <img className="rounded-t-xl" src="/portfolio/teachme.png"></img>
                    <div className="p-2">
                        <h2 className="text-xl text-slate-100 pb-2 border-b-2 border-b-slate-100">TeachMe</h2>
                        <p className="text-slate-100 mt-2">Platform for sharing knowledge with other users via courses.</p>
                        <div className="mt-2 flex flex-col gap-2">
                            <a href="https://jzietek.com/teachme/public/" target="_blank" className="text-slate-100 hover:text-purple-400 transition-colors flex gap-2 items-center w-fit">
                                <span class="material-symbols-outlined">language</span>
                                <span>Website</span>
                            </a>
                            <a href="https://github.com/TeachMe-Learning-app/teachMe" target="_blank" className="text-slate-100 hover:text-purple-400 transition-colors flex gap-2 items-center w-fit">
                                <span class="material-symbols-outlined">folder_code</span>
                                <span>GitHub source</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" bg-black/40 rounded-xl border-slate-100 border-2 w-[300px] h-[370px] hover:[transform:translateY(-5%)_scale(1.05)] transition-[transform] z-0 hover:z-10">
                    <img className="rounded-t-xl" src="/portfolio/fotw.png"></img>
                    <div className="p-2">
                        <h2 className="text-xl text-slate-100 pb-2 border-b-2 border-b-slate-100">Fears of the West</h2>
                        <p className="text-slate-100 mt-2">Card game written in Unity.</p>
                        <div className="mt-2 flex flex-col gap-2">
                            <a href="https://github.com/Fears-of-the-West/Fears-of-the-West" target="_blank" className="text-slate-100 hover:text-purple-400 transition-colors flex gap-2 items-center w-fit">
                                <span class="material-symbols-outlined">folder_code</span>
                                <span>GitHub source</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" bg-black/40 rounded-xl border-slate-100 border-2 w-[300px] h-[370px] hover:[transform:translateY(-5%)_scale(1.05)] transition-[transform] z-0 hover:z-10">
                    <img className="rounded-t-xl" src="/portfolio/flirtini.png"></img>
                    <div className="p-2">
                        <h2 className="text-xl text-slate-100 pb-2 border-b-2 border-b-slate-100">Flirtini</h2>
                        <p className="text-slate-100 mt-2">Package for Laravel which helps implementing OpenAI endpoints into projects</p>
                        <div className="mt-2 flex flex-col gap-2">
                            <a href="https://github.com/FlirtiniApp" target="_blank" className="text-slate-100 hover:text-purple-400 transition-colors flex gap-2 items-center w-fit">
                                <span class="material-symbols-outlined">folder_code</span>
                                <span>GitHub source</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" bg-black/40 rounded-xl border-slate-100 border-2 w-[300px] h-[370px] hover:[transform:translateY(-5%)_scale(1.05)] transition-[transform] z-0 hover:z-10">
                    <img className="rounded-t-xl" src="/portfolio/weatherapp.png"></img>
                    <div className="p-2">
                        <h2 className="text-xl text-slate-100 pb-2 border-b-2 border-b-slate-100">Weather App</h2>
                        <p className="text-slate-100 mt-2">Weather app written in Vue, focused on style.</p>
                        <div className="mt-2 flex flex-col gap-2">
                            <a href="https://github.com/Dzarooo/vue_project/tree/main/weather_app" target="_blank" className="text-slate-100 hover:text-purple-400 transition-colors flex gap-2 items-center w-fit">
                                <span class="material-symbols-outlined">folder_code</span>
                                <span>GitHub source</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <p className="text-xl">See more on my <a className="text-purple-500 hover:underline cursor-pointer" target="_blank" href="https://github.com/Dzarooo">GitHub</a></p>
        </div>
    )
}

export default Projects;