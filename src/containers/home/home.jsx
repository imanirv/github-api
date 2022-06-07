import { useEffect } from "react"

// load dispatcher 
import {useUserDispatcher} from "../../redux/reducers/user"
import { useRepositoriesDispatcher } from "../../redux/reducers/repositories"

// load layout
import MainLayout from "../../components/layouts" 

// load elements 
import Profile from "./elements/profile"
import Repositories from "./elements/repositories"


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
       <MainLayout>
           <Profile userData={userData} followers={followers.length} following={following.length} />
            <Repositories data={repositories}/>
       </MainLayout>
    )
}

export default HomeContainer