import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {signInWithPopup, GithubAuthProvider} from "firebase/auth"
import { auth } from "../../../configs/firebase";

const initialState = {
    dataLogin: [],
    loading: false
}

const slices = createSlice({
    initialState,
    name:'authorization',
    reducers:{
        setDataLogin(state, action) {
            Object.assign(state, {
                ...state,
                dataLogin: action.payload
            })
        },
        
        setLoading(state, action) {
            Object.assign(state, {
                ...state,
                loading: action.payload
            })
        }
    }
})

const {setDataLogin, setLoading} = slices.actions

export const useAuthDispatcher = () => {
    const {authorization} = useSelector((state) => state);
    const dispatch = useDispatch();


    const doLogin = async () => {
        dispatch(setLoading(true));
        signInWithPopup(auth, new GithubAuthProvider())
        .then((res)=> {
            console.log(res._tokenResponse)
            const payload = {
                username: res._tokenResponse.screenName,
                access_token: res._tokenResponse.oauthAccessToken
            }
            localStorage.setItem('token', payload.access_token)
            dispatch(setDataLogin(payload))
            dispatch(setLoading(false));
            window.location.href= '/'
        })
        .catch((err) => {
            console.log(err)
            dispatch(setLoading(false));
            
        })
    }

    const doLogout = async () => {
        localStorage.removeItem('token')
        window.location.href = '/landing-page'
    }

    return {
        doLogin,
        doLogout,
        authorization
    }

}


export default slices.reducer