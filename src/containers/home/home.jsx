import { useEffect } from "react"
import Image from "next/image"

// load dispatcher 
import {useUserDispatcher} from "../../redux/reducers/user"
import { useRepositoriesDispatcher } from "../../redux/reducers/repositories"

// icon
import GithubIcon from "../../components/icons/github-icon"

const HomeContainer = () => {
    const {user: {userData}, getUser, getFollower, getFollowing} = useUserDispatcher()
    const {getRepositories} = useRepositoriesDispatcher()

    useEffect(() => {
        getUser()
        getFollower()
        getFollowing()
        getRepositories()
    }, [])

    return(
        <div className="w-screen h-full min-h-screen bg-dark-1">
            <nav className="px-4 lg:px-36 py-5 border-b border-disabled"><GithubIcon /></nav>
            <div className="px-4 lg:px-36 pt-14 pb-9 flex flex-col lg:flex-row items-center justify-center lg:justify-between ">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* profile image  */}
                    <div className="w-52 h-52 ">
                        {
                            userData.avatar_url && <Image src={userData.avatar_url}  width={200} height={200} layout="responsive" alt={userData.login}/>
                        }
                    </div>
                    <div className="mt-5 lg:ml-12 text-center lg:text-left">
                        <h1 className="text-white text-4xl font-semibold">{userData.name}</h1>
                        <h3 className="text-white text-xl font-light mt-2">{userData.login}</h3>
                        <p className="text-white mt-5">{userData.bio}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeContainer