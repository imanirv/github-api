import GithubIcon from "../../icons/github-icon"
import SearchIcon from "../../icons/search-icon"

const Navbar = () => {
    return (
        <nav className="px-4 lg:px-36 py-5 border-b border-disabled flex items-center justify-between">
                <GithubIcon />
                <div className="lg:w-1/3 h-10 relative">
                    <form action="">
                        <input type="text" className="w-full h-10 bg-transparent border border-disabled text-disabled px-5 font-light font-inter" placeholder="Search another user" />
                        <button className="absolute bottom-2 right-3">
                                <SearchIcon />
                        </button>
                    </form>
                    
                </div>
            </nav>
    )
}

export default Navbar