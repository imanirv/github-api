import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";
import { getToken } from "../../../helpers/auth";
const initialState = {
    repositories: [],
    loading: false
}

const slices = createSlice({
    initialState,
    name:'repository',
    reducers:{
        setRepositories(state, action) {
            Object.assign(state, {
                ...state,
                repositories: action.payload
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

const {setRepositories, setLoading} = slices.actions

export const useRepositoriesDispatcher = () => {
    const {repository} = useSelector((state) => state);
    const dispatch = useDispatch();
    const token = getToken();

    const getMyRepo = async () => {
        try {
            dispatch(setLoading(true));
            const response = await callAPI({
                url: `/user/repos?sort=updated`,
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(setRepositories(response.data))
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)   
        }
    }

    const getRepositories = async (keyword) => {
        try {
            dispatch(setLoading(true));
            const response = await callAPI({
                url: `/users/${keyword}/repos?sort=updated`,
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(setRepositories(response.data))
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)   
        }
    }


    return {
        getMyRepo,
        getRepositories,
        repository
    }

}


export default slices.reducer