import { useContext, useState } from "react"
import axios from "axios"
import UserContext from '../userContext/UserContext'
import {useNavigate} from 'react-router-dom'
import '../CSS/signin.css'
import { Link } from "react-router-dom"
import { message } from 'antd'

function Signin(){

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const {setUser,setRole}=useContext(UserContext)
    const navigate=useNavigate()

    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios({
                method:'post',
                url:['http://localhost:1234/signin'],
                withCredentials:true,
                data:{email,password}
              })
              //window.location.reload()

              if(res.data.success){
                 message.success('succesfully Login')
                 setUser(true)
                 if(res.data.data.role=="ADMIN")
                    {
                        setRole(true)
                        navigate('/')
                    }else{
                      message.error(res.data.message)
                    }

                    

              }
        }catch(e){
            message.error('something went wrong')
            console.log(e.message)
        }
    }
    return(
        <form onSubmit={handlesubmit} className="signin-box">
        <div>
            Email : <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
            <br />
            Password : <input type="text" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
            <br />
            <button>submit</button>
        </div>
        <Link to='/signup'>New User ?</Link>
        </form>
    )
}

export default Signin