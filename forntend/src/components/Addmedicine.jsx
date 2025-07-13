import { useState } from 'react'
import '../CSS/addmedicine.css'
import axios from 'axios'


function Addmedicine(){
    const [name,setName]=useState()
    const [uses_english,setUses_English]=useState()
    const [uses_hindi,setUses_Hindi]=useState()
    const [image,setImage]=useState()
    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('uses_english',uses_english)
    formdata.append('uses_hindi',uses_hindi)
    formdata.append('image',image)
    
    const handlesubmit=async(e)=>{
      e.preventDefault()
      try{
        const res=await axios({
            method:'post',
            url:['http://localhost:1234/addmedicine'],
            withCredentials:true,
            data:formdata
           })
           if(res.data.success){
            alert('successfully add medicine')
            }
      }catch(e){
        alert('there are error in add medicine')
        console.log(e)
      }
    }
    

    return(
        <form className='add-box' onSubmit={handlesubmit}>
            <div>
                Medicine Name : <input type="text" name='medicine name' onChange={(e)=>setName(e.target.value)} required/>
                <br />
                Uses in English : <textarea name="uses in english" rows={3} cols={200} onChange={(e)=>setUses_English(e.target.value)} required/>
                <br />
                Uses in Hindi : <textarea name="uses in hindi" rows={3} cols={200} onChange={(e)=>setUses_Hindi(e.target.value)} required/>
                <br />
                Medicine Image : <input type="file" onChange={(e)=>setImage(e.target.files[0])} required/>
                <br />
                <button>submit</button>
            </div>
        </form>
    )
}

export default Addmedicine