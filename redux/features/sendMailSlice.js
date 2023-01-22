import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import emailjs from "@emailjs/browser";



export const sendInquiry = createAsyncThunk('inquiry/sendInquiry',async(form)=>{

   return emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_D , form, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    .then((result)=>result.text).catch(error=>error.txt)
})

const inquirySlice = createSlice({
    name:'inquiry',
    initialState:{
        loading:true,
        error:'',
        result:''
    },

    extraReducers:{
        [sendInquiry.pending]:(state,action)=>{
            state.loading=true
        

        },
        [sendInquiry.fulfilled]:(state, action)=>{
            state.loading=false,
            state.result=action.payload

        },
        [sendInquiry.rejected]:(state, action)=>{
            state.loading=false,
            state.error='Oops An error occured. Try again later.'

        }
    }
})







export default inquirySlice.reducer