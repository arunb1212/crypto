import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Home'
import Nsv from './Components/Nsv'
import Coins from './Components/Coins'

const App = () => {
  return (
    <div className='bg-gradient-to-b from-violet-600 to-gray-800 w-screen min-h-screen  px-[20px] py-[20px]'>
      <Nsv/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins/:coinid' element={<Coins/>}/>

      </Routes>


    </div>
  )
}

export default App