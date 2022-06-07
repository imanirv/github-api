import { useEffect } from "react"
import {useRouter} from "next/router"
// load dispatcher 
import {useUserDispatcher} from "../../redux/reducers/user"
import { useRepositoriesDispatcher } from "../../redux/reducers/repositories"

// load layout
import MainLayout from "../../components/layouts" 

// load elements 
import Profile from "./elements/profile"
import Repositories from "./elements/repositories"


const HomeContainer = () => {
    const router = useRouter()
    const {keyword} = router.query
    const {user, getMydata,getMyFollower, getMyFollowing, getUser, getFollower, getFollowing} = useUserDispatcher()
    const {repository, getRepositories, getMyRepo} = useRepositoriesDispatcher()

    useEffect(() => {
            
        if (keyword) {
            getUser(keyword)
            getFollower(keyword)
            getFollowing(keyword)
            getRepositories(keyword)
        }else{
            getMydata()
            getMyRepo()
            getMyFollower()
            getMyFollowing()
        }
    }, [keyword])
    
    return(
       <MainLayout>
           <Profile userData={user.userData} followers={user.followers.length} following={user.following.length} isLoading={user.loading} />
            <Repositories data={repository.repositories} isLoading={repository.loading}/>
       </MainLayout>
    )
}

export default HomeContainer