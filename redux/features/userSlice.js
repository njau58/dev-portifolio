import axios from 'axios'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const Login = createAsyncThunk('/authenticate', async(formData)=>{

    return axios.post('/api/authenticate', formData)
    .then((result)=>result).catch(error=>error)
})

const userSlice = createSlice({
    name:'authenticate',
    initialState:{
        loading:true,
        error:'',
        user:'',
     
    },

    extraReducers:{
        [Login.pending]:(state,action)=>{
            state.loading=true
        

        },
        [Login.fulfilled]:(state, action)=>{
            state.loading=false,
            state.user=action.payload
         

        },
        [Login.rejected]:(state, action)=>{
            state.loading=false,
            state.error='Wrong credentials. Contact Administrator.'

        },
        logout(state, action) {
            state.user = '';
          },
    }

})

export const { logout } = userSlice.actions;

export default userSlice.reducer