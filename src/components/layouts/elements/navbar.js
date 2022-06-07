import { useFormik } from "formik"
import { useRouter } from "next/router"

import {useAuthDispatcher} from "../../../redux/reducers/auth"

import GithubIcon from "../../icons/github-icon"
import SearchIcon from "../../icons/search-icon"
import LogoutIcon from "../../icons/logout-icon"
import Link from "next/link"

const Navbar = () => {
    const {push} = useRouter()
    const {doLogout} = useAuthDispatcher()
    const onSubmit = (values) => {
        push(`/${values.keyword}`)
    }
    const {
        handleSubmit,
        handleChange
    } = useFormik({
        initialValues: {keyword: ''},
        onSubmit
    })
    return (
        <nav className="px-4 lg:px-36 py-5 border-b border-disabled flex items-center justify-between">
                <div className="flex w-2/3 lg:w-1/2">
                    <Link href="/">
                        <a>
                            <GithubIcon />
                        </a>
                    </Link>
                    <div className="ml-5 w-full h-10 relative">
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" name="keyword" onChange={handleChange} className="w-full h-10 bg-transparent border border-disabled text-disabled px-2 pr-10 lg:px-5 font-light font-inter" placeholder="Search another user" autoComplete="off"/>
                            <button className="absolute bottom-2 right-3">
                                    <SearchIcon />
                            </button>
                        </form>
                    </div>
                </div>
                    <button className="bg-red-500 lg:px-10 px-2 py-2 text-white text-sm flex items-center hover:bg-red-700 hover:font-semibold transition-all" onClick={() => doLogout()}><LogoutIcon /> <span className="hidden lg:inline ml-5">Logout</span> </button>
            </nav>
    )
}

export default Navbar