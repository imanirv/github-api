import { useEffect, useState } from "react";
import {getToken} from "../../helpers/auth";

const AuthProvider = ({children}) => {
    const [mounted, setMounted] = useState(false);


    useEffect(() =>{
        const token = getToken();
        if(!token) {
            window.location.href = '/landing-page';
        }
        setMounted(true)
    }, [])

    if(mounted) {
       return children
    }

    return <></>

}

export default AuthProvider