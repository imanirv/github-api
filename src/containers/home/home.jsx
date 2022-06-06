import { useEffect } from "react"
import {useUserDispatcher} from "../../redux/reducers/user"

const HomeContainer = () => {

    const {getUser, getFollower, getFollowing} = useUserDispatcher()

    useEffect(() => {
        getUser()
        getFollower()
        getFollowing()
    }, [])
    return(
        <>
            hi
        </>
    )
}

export default HomeContainer