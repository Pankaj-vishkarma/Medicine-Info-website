import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import '../CSS/signup.css'
import { Link } from "react-router-dom"

function Signup(){

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirmpassword,setConfirmpassword]=useState()
    const navigate=useNavigate()
    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios({
                method:'post',
                url:['http://localhost:1234/signup'],
                withCredentials:true,
                data:{name,email,password,confirmpassword}
            })

            if(res.data.success){
              alert('successfully login')
              navigate('/signin')
            }
            
        }catch(e){
            alert('there are sume error')
            console.log(e.message)
        }
    }

    return(
        <form onSubmit={handlesubmit} className="signup-box">
         <div>
           Name : <input type="text" name="name" onChange={(e)=>setName(e.target.value)} required/>
           <br />
           Email : <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)} required/>
           <br />
           Password : <input type="text" name="password"  onChange={(e)=>setPassword(e.target.value)} required/>
           <br />
           Confirm Password<input type="text" name="confirmpassword"  onChange={(e)=>setConfirmpassword(e.target.value)} required/>
           <br />
           <button>submit</button>
           <br />
           <Link to='/signin'>Already registered ?</Link>
         </div>
        </form>
    )
}

export default Signup