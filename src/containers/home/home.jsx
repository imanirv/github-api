import { useEffect } from "react"
import {useUserDispatcher} from "../../redux/reducers/user"
import { useRepositoriesDispatcher } from "../../redux/reducers/repositories"

const HomeContainer = () => {

    const {getUser, getFollower, getFollowing} = useUserDispatcher()
    const {getRepositories} = useRepositoriesDispatcher()

    useEffect(() => {
        getUser()
        getFollower()
        getFollowing()
        getRepositories()
    }, [])
    return(
        <>
            hi
        </>
    )
}

export default HomeContainer