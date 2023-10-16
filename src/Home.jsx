import React from 'react'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux';
import { Handleinc, Handledec,Handlerest } from './action/myaction';
const Home = () => {
  const despatch = useDispatch();
  const counter= useSelector(state=>state)
   
  return (
    <div>
      <h1 >this is counter {counter}</h1>
      <button onClick={()=>despatch(Handleinc())}>Inc</button>
      <button onClick={()=>despatch(Handledec())}>DEC</button>
      <button onClick={()=>despatch(Handlerest())}>rest</button>


    </div>
  )
}

export default Home
