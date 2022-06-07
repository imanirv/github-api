import { useEffect } from "react"
import Image from "next/image"
import moment from "moment"


// load dispatcher 
import {useUserDispatcher} from "../../redux/reducers/user"
import { useRepositoriesDispatcher } from "../../redux/reducers/repositories"

// icon
import GithubIcon from "../../components/icons/github-icon"
import SearchIcon from "../../components/icons/search-icon"

const HomeContainer = () => {
    const {user: {userData, following, followers}, getUser, getFollower, getFollowing} = useUserDispatcher()
    const {repository: {repositories}, getRepositories} = useRepositoriesDispatcher()

    useEffect(() => {
        getUser()
        getFollower()
        getFollowing()
        getRepositories()
    }, [])

    return(
        <div className="w-screen h-full min-h-screen bg-dark-1">
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
            <div className="px-4 lg:px-36 pt-14 pb-9 flex flex-col lg:flex-row items-center justify-center lg:justify-between ">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* profile image  */}
                    <div className="w-52 h-52 ">
                        {
                            userData.avatar_url && <Image src={userData.avatar_url}  width={200} height={200} layout="responsive" alt={userData.login}/>
                        }
                    </div>
                    <div className="mt-5 lg:ml-12 text-center lg:text-left">
                        <h1 className="text-white text-4xl font-semibold font-inter">{userData.name}</h1>
                        <h3 className="text-white text-xl font-light mt-2 font-inter">{userData.login}</h3>
                        <p className="text-white font-inter mt-5">{userData.bio}</p>
                    </div>
                </div>
                <div className="lg:h-24 lg:w-[1px] h-[1px] w-24 bg-disabled my-10"></div>
                <div className="flex ">
                    <div className="mx-6 text-center">
                        <h3 className="text-white text-xl font-light mt-2 font-inter">Following</h3>
                        <p className="text-white text-4xl font-inter font-extralight mt-3">{following.length}</p>
                    </div>
                    <div className="mx-6 text-center">
                        <h3 className="text-white text-xl font-light mt-2 font-inter">Followers</h3>
                        <p className="text-white text-4xl font-inter font-extralight mt-3">{followers.length}</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-disabled bg-dark-2">
                <div className="px-4 py-5 lg:px-36">
                    <h2 className="text-white text-3xl font-bold font-inter ml-3">Repositories</h2>
                    <div className="w-full h-full flex justify-start items-start flex-wrap mt-5">
                        {repositories.map((repo, i) => (
                            <div key={i} className="w-full lg:w-1/4  p-3">
                                <div className="border border-disabled p-5 h-40 relative hover:border-4 hover:rounded-md transition-all ">
                                    <h5 className="text-white text-xl font-inter">{repo.name}</h5>
                                    <p className="text-white font-extralight font-inter">{repo.full_name}</p>
                                    <span className="absolute bottom-2 right-2 text-disabled text-xs font-inter font-light italic">Last updated: {moment(repo.updated_at).fromNow()}</span>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer