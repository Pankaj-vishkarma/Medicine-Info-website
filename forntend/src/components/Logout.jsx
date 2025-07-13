import { useContext, useEffect } from "react"
import UserContext from "../userContext/UserContext"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { message } from 'antd'

function Logout(){
   const {setUser}=useContext(UserContext)
   const navigate=useNavigate()

   useEffect(()=>{
    handle()
   })

   const handle=async()=>{
       try{
        const res=await axios({
            method:'get',
            url:['http://localhost:1234/logout'],
            withCredentials:true
         })

         if(res.data.success){
            message.success('Logout successfully')
            setUser(false)
            navigate('/')
         }else{
            message.error(res.data.message)
         }
        }catch(e){
            message.error('something went wrong')
            console.log(e)
        }
    }
    
}

export default Logout