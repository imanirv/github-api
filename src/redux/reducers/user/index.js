import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";

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
        getFollower,
        getFollowing,
        user
    }

}


export default slices.reducer