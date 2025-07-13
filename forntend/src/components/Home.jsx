import { useEffect, useState } from 'react'
import '../CSS/home.css'
import axios from 'axios'

function Home(){

    const [name,setname]=useState()
    const [data,setdata]=useState({})
    const [result,setresult]=useState(false)
    
    const handlesubmit=async(e)=>{
      e.preventDefault()
      try{
        const res=await axios({
            method:'post',
            url:"http://localhost:1234/search",
            withCredentials:true,
            data:{name}
        })

        if(res.data.success){
          setdata(res.data.data)
          setresult(true)
          console.log(res.data.data)
        }
      }catch(e){
        alert('there are some error')
        console.log(e.message)
      }
      
    }

    const handleclick=()=>{
       setresult(false)
    }

    if(result){
        return(
            <div className='home-result'>
                <div className='logo-image'>
                    <button onClick={handleclick}>
                        back
                    </button>
                </div>
                <h1>{data.name}</h1>
               <div className='home-result-2'>
                  <div className='home-content'>
                    <h2>Image</h2>
                    <br />
                    <img src={data.image.secure_url} alt="" height={220} width={350}/>
                  </div>
                  <div className='home-content'>
                    <h2>English</h2>
                    <br />
                    <h3>{data.uses_english}</h3>
                  </div>
                  <div className='home-content'>
                   <h2>Hindi</h2>
                    <br />
                    <h4>{data.uses_hindi}</h4>
                  </div>
               </div>
            </div>
        )
    }else{
        return(
        
            <div>
                <form onSubmit={handlesubmit} className='home-input'>
                    <input type="text" placeholder='Search medicine...' required value={name} onChange={(e)=>setname(e.target.value.toLocaleLowerCase())}/>
                    <button>Search</button>
                </form>
            <div className='container'>
              
                <div className='slide-container'>
                
                    <div className='slide-image'>
                        <img src="https://t4.ftcdn.net/jpg/02/81/42/77/240_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t4.ftcdn.net/jpg/06/66/55/31/240_F_666553178_nLdmQQX9ZxMggeFF1ploK6iUBWKz63lQ.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t4.ftcdn.net/jpg/01/18/42/59/240_F_118425925_n2GZJR42P1ai0p3qYmNe375LCd6kQ9R4.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t4.ftcdn.net/jpg/02/57/02/39/240_F_257023906_UumIgLi6ECSyIGuWVNpuHLYPc3jZuiaE.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t3.ftcdn.net/jpg/07/02/41/48/240_F_702414887_Zq7SZg5I60CwPVoePtJm7LcVTsS5l4GZ.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t3.ftcdn.net/jpg/00/91/71/36/240_F_91713684_LbElfiMPLNfIX9pg85BCOA05TO2fDmTP.jpg" alt="iamge" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t3.ftcdn.net/jpg/02/33/66/28/240_F_233662833_vsWRmvwKoYslnWcU3GIFKrb8z58GvQHh.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t3.ftcdn.net/jpg/02/74/13/16/240_F_274131656_Ka8pLtBxBHRGac7lE8PIjpsF4UFZBh8M.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t4.ftcdn.net/jpg/02/81/42/77/240_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t4.ftcdn.net/jpg/06/66/55/31/240_F_666553178_nLdmQQX9ZxMggeFF1ploK6iUBWKz63lQ.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t4.ftcdn.net/jpg/01/18/42/59/240_F_118425925_n2GZJR42P1ai0p3qYmNe375LCd6kQ9R4.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t4.ftcdn.net/jpg/02/57/02/39/240_F_257023906_UumIgLi6ECSyIGuWVNpuHLYPc3jZuiaE.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t3.ftcdn.net/jpg/07/02/41/48/240_F_702414887_Zq7SZg5I60CwPVoePtJm7LcVTsS5l4GZ.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t3.ftcdn.net/jpg/00/91/71/36/240_F_91713684_LbElfiMPLNfIX9pg85BCOA05TO2fDmTP.jpg" alt="iamge" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t3.ftcdn.net/jpg/02/33/66/28/240_F_233662833_vsWRmvwKoYslnWcU3GIFKrb8z58GvQHh.jpg" alt="image" />
    
                    </div>
                    <div className='slide-image'>
                        <img src="https://t3.ftcdn.net/jpg/02/74/13/16/240_F_274131656_Ka8pLtBxBHRGac7lE8PIjpsF4UFZBh8M.jpg" alt="image" />
    
                    </div>
                 
                </div>
    
            </div>
            </div>
        )
    }


    
}

export default Home