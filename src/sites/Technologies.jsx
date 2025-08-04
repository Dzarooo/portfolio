const Technologies = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center ">
            <div className="flex items-center justify-center flex-col gap-10 w-[80vw]">
                <h1 className="text-6xl starWarsText">Technologies I work in</h1>
                <div className="flex gap-4 flex-wrap justify-center">
                    <div className="bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 border-amber-400 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/vite-logo.svg"></img>
                        <p className="text-xl text-slate-100">Vite</p>
                    </div>
                    <div className="border-green-500 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/node-logo.svg"></img>
                        <p className="text-xl text-slate-100">Node.js</p>
                    </div>
                    <div className="border-orange-500 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/git-logo.svg"></img>
                        <p className="text-xl text-slate-100">Git</p>
                    </div>
                    <div className="border-slate-800 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 h-[75px]" src="/portfolio/github-mark.svg"></img>
                        <p className="text-xl text-slate-100">GitHub</p>
                    </div>
                    <div className="border-orange-400 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px] scale-200" src="/portfolio/gitlab-logo.svg"></img>
                        <p className="text-xl text-slate-100">GitLab</p>
                    </div>
                    <div className="border-blue-300 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/react-logo.svg"></img>
                        <p className="text-xl text-slate-100">React</p>
                    </div>
                    <div className="border-green-500 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/vue-logo.svg"></img>
                        <p className="text-xl text-slate-100">Vue</p>
                    </div>
                    <div className="border-red-500 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/laravel-logo.svg"></img>
                        <p className="text-xl text-slate-100">Laravel</p>
                    </div>
                    <div className="border-blue-300 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/tailwind-logo.svg"></img>
                        <p className="text-xl text-slate-100">Tailwindcss</p>
                    </div>
                    <div className="border-slate-800 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/expressjs-logo.svg"></img>
                        <p className="text-xl text-slate-100">Express.js</p>
                    </div>
                    <div className="border-orange-400 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px] scale-125" src="/portfolio/sql-logo.svg"></img>
                        <p className="text-xl text-slate-100">SQL</p>
                    </div>
                    <div className="border-green-500 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[40px]" src="/portfolio/mongodb-logo.svg"></img>
                        <p className="text-xl text-slate-100">MongoDB</p>
                    </div>
                    <div className="border-orange-500 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/html-logo.svg"></img>
                        <p className="text-xl text-slate-100">HTML</p>
                    </div>
                    <div className="border-blue-400 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/css-logo.svg"></img>
                        <p className="text-xl text-slate-100">CSS</p>
                    </div>
                    <div className="border-yellow-300 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[90px]" src="/portfolio/js-logo.png"></img>
                        <p className="text-xl text-slate-100">JS</p>
                    </div>
                    <div className="border-purple-600 bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/csharp-logo.svg"></img>
                        <p className="text-xl text-slate-100">C#</p>
                    </div>
                    <div className="border-black bg-black/50 p-4 min-w-[150px] min-h-[150px] rounded-xl flex items-center justify-center flex-col border-2 hover:-translate-y-2 transition-transform">
                        <img className="flex-1 w-[75px]" src="/portfolio/unity-logo-black.svg"></img>
                        <p className="text-xl text-slate-100">Unity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;