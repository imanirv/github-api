import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";

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


    const getRepositories = async () => {
        try {
            dispatch(setLoading(true));
            const response = await callAPI({
                url: `/users/imanirv/repos`,
                method: 'get'
            })
            dispatch(setRepositories(response.data))
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)   
        }
    }


    return {
        getRepositories,
        repository
    }

}


export default slices.reducer