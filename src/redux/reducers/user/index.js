import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";
import {getToken} from "../../../helpers/auth";

const initialState = {
    userData: [],
    followers: [],
    following: [],
    loading: false
}

const slices = createSlice({
    initialState,
    name:'user',
    reducers:{
        setUserData(state, action) {
            Object.assign(state, {
                ...state,
                userData: action.payload
            })
        },
        setFollowers(state, action) {
            Object.assign(state, {
                ...state,
                followers: action.payload
            })
        },
        setFollowing(state, action) {
            Object.assign(state, {
                ...state,
                following: action.payload
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

const {setUserData, setFollowing, setFollowers, setLoading} = slices.actions

export const useUserDispatcher = () => {
    const {user} = useSelector((state) => state);
    const dispatch = useDispatch();
    const token = getToken();

    const getUser = async (keyword) => {
        try {
            dispatch(setLoading(true));
            const response = await callAPI({
                url: `/users/${keyword}`,
                method: 'get'
            })
            dispatch(setUserData(response.data))
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)   
        }
    }

    const getMydata = async () => {
        try {
            dispatch(setLoading(true))
                const response = await callAPI({
                    url:'/user',
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch(setUserData(response.data))
            
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)
        }
    }

    const getMyFollower = async () => {
        try {
            dispatch(setLoading(true));
            const response = await callAPI({
                url:`user/followers`,
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch(setFollowers(response.data))
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error)
        }
    }
    const getMyFollowing = async () => {
        try {
            dispatch(setLoading(true));
            const response = await callAPI({
                url:`user/following`,
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(setFollowing(response.data))
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error)
        }
    }
    const getFollower = async (keyword) => {
        try {
            dispatch(setLoading(true));
            const response = await callAPI({
                url:`users/${keyword}/followers`,
                method: 'get'
            })

            dispatch(setFollowers(response.data))
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error)
        }
    }
    const getFollowing = async (keyword) => {
        try {
            dispatch(setLoading(true));
            const response = await callAPI({
                url:`users/${keyword}/following`,
                method: 'get'
            })
            dispatch(setFollowing(response.data))
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getUser,
        getMydata,
        getFollower,
        getFollowing,
        getMyFollower,
        getMyFollowing,
        user
    }

}


export default slices.reducer