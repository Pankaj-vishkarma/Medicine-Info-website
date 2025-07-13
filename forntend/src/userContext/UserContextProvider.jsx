import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [role,setRole]=useState()
    return(
        <UserContext.Provider value={{user,setUser,role,setRole}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider