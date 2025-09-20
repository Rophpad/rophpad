import Header from "./Header";
import Widget from "./Widget";

export default function LeftSideBar() {
    const ids = ["about me", "projects", "experiences", "talks"];
    return (
        <div className="h-full w-1/3  hidden lg:block relative p-4">
            <Widget>
                <div className="w-full flex items-center justify-end px-8 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="size-4">
                        <path fill="currentColor" fillRule="evenodd" d="M6.416 4.767a2.65 2.65 0 0 0-2.65 2.65v8.832a2.65 2.65 0 0 0 2.65 2.65h1.461V4.767h-1.46Zm0-1.767A4.416 4.416 0 0 0 2 7.416v8.833a4.416 4.416 0 0 0 4.416 4.417h11.168A4.416 4.416 0 0 0 22 16.248V7.416A4.416 4.416 0 0 0 17.584 3zm3.228 1.767v14.132h7.94a2.65 2.65 0 0 0 2.65-2.65V7.416a2.65 2.65 0 0 0-2.65-2.65h-7.94Z" clipRule="evenodd" />
                    </svg>
                </div>
                <Header />
                <div className="mt- mx-8">
                    <div className="mb-6">
                        {/* <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider">
                            Navigate
                        </h3> */}
                        <div className="w-8 h-px bg-gradient-to-r from-white/20 to-transparent mt-2"></div>
                    </div>
                    <nav className="space-y-2">
                        {ids.map((id, index) => {
                            return (
                                <a
                                    key={index}
                                    href={`#${id}`}
                                    className="group flex items-center px-3 py-2 text-xs text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-white/10"
                                >
                                    <div className="w-1 h-1 bg-white/40 rounded-full mr-3 group-hover:bg-white group-hover:w-2 transition-all duration-200"></div>
                                    {id[0].toUpperCase() + id.slice(1)}
                                </a>
                            )
                        })}
                    </nav>
                </div>
            </Widget>
        </div>
    )
};