import { Link } from "react-router-dom"
import '../CSS/header.css'
import { useContext } from "react"
import UserContext from "../userContext/UserContext"
function Header(){

  const {user,role}=useContext(UserContext)

  if(user && role){
    return(
      <div className="main-box">
      <div className="label-box">
       <h1>Medicine.com</h1>
      </div>
      <div className="link-box">
        <div>
          <Link className="link" to='/'>Home</Link>
        </div>
        <div>
          <Link className="link" to='/listname'>Medicine-List</Link>
        </div>
        <div>
          <Link className="link" to='/addmedicine'>ADD-Medicine</Link>
        </div>
        <div>
          <Link className="link" to='/logout'>Logout</Link>
        </div>
      </div>
      </div>
  )
  }else if(user){
    return(
      <div className="main-box">
      <div className="label-box">
       <h1>Medicine.com</h1>
      </div>
      <div className="link-box">
        <div>
          <Link className="link" to='/'>Home</Link>
        </div>
        <div>
          <Link className="link" to='/listname'>Medicine-List</Link>
        </div>
        <div>
          <Link className="link" to='/logout'>Logout</Link>
        </div>
      </div>
      </div>
  )
  }else{
    return(
      <div className="main-box">
      <div className="label-box">
       <h1>Medicine.com</h1>
      </div>
      <div className="link-box">
        <div>
          <Link className="link" to='/'>Home</Link>
        </div>
        <div>
          <Link className="link" to='/listname'>Medicine-List</Link>
        </div>
        <div>
          <Link className="link" to='/signup'>Login</Link>
        </div>
      </div>
      </div>
  )
  }
    
}

export default Header