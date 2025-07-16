import React, { useContext } from 'react'
import { CoinCon } from '../../Context/CoinContext'
import { Link } from 'react-router'

const Nsv = () => {

    let {setcurr}=useContext(CoinCon)


let handler=(e)=>{
switch (e.target.value) {
    case "Usd":{
        setcurr({name:"Usd",symbol:"$"})
        break;

    }
    case "Eur":{
        setcurr({name:"Eur",symbol:"¢"})
        break;

    }    case "Inr":{
        setcurr({name:"Inr",symbol:"₹"})
        break;

    }
        

    default:{
        setcurr({name:"Usd",symbol:"$"})
        break;
    }
}
}
  return (

    <div>
    <div className='flex justify-between items-center px-[50px] '>
       <Link to={"/"}>
       <img src="/download.png" alt="Logo" />
       </Link> 

        <div>
            <ul className='cursor-pointer flex text-white text-[18px] justify-center gap-[10px]'>
            <Link to={"/"}> <li>Home</li></Link>   
                <li>Pricing</li>
                <li>Features</li>
                <li>Blogs</li>
            </ul>

        </div>
        <div className='flex  gap-[10px]'>
        <select className='text-white outline-none' onChange={handler}>
            <option value="Usd">Usd</option>
            <option value="Eur">Euro</option>
            <option value="Inr">Inr</option>

        </select>
<button className='px-[10px] h-[35px] text-bold bg-white rounded '>Sign Up</button>
        </div>
    </div>
    <hr className='h-[2px] w-full mt-[10px]' />

    </div>
  )
}

export default Nsv