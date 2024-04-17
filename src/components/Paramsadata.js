import React, { useState } from 'react'

export const Paramsadata = () => {
    const [country,setcountry]=useState("")
    const [state,setstate]=useState('')
    const paramsdata=async()=>{
        let data={
            method:"GET"
        }
        //params
        let url=`https://fakestoreapi.com/products/${country}/${state}`
        console.log('PARAMS URL',url)
        const datamain=await fetch(url,data)
        const conv=await datamain.json()
        console.log(conv,"data")

    }

    const querystringdata=async()=>{
        let data={
            method:"GET"
        }
        //params
        const second=`https://fakestoreapi.com/products?country=${country}&state=${state}`
        console.log('querystring data',second)
        const datamain1=await fetch(second,data)
        const conv1=await datamain1.json()
        console.log(conv1,"data")

    }

   


  return (
    <div>
        <h1>params dadta</h1>
       <div>
       <select onChange={(e)=>{setcountry(e.target.value)}}>
            <option>Country</option>
            <option>India</option>
            <option>china</option>
            <option>japan</option>
            <option>indonesia</option>
            <option>russia</option>
        </select>
       </div>
       <div>
       <select onChange={(m)=>{setstate(m.target.value)}}>
            <option>state</option>
            <option>andhrapradesh</option>
            <option>delhi</option>
            <option>chennai</option>
            <option>maharshstra</option>
            <option>jammu</option>
        </select>
       </div>
       <button onClick={()=>{paramsdata()}}>Submit</button>
       <h1>querystring data</h1>
       <div>
       <select onChange={(e)=>{setcountry(e.target.value)}}>
            <option>Country</option>
            <option>India</option>
            <option>china</option>
            <option>japan</option>
            <option>indonesia</option>
            <option>russia</option>
        </select>
       </div>
       <div>
       <select onChange={(m)=>{setstate(m.target.value)}}>
            <option>state</option>
            <option>andhrapradesh</option>
            <option>delhi</option>
            <option>chennai</option>
            <option>maharshstra</option>
            <option>jammu</option>
        </select>
       </div>
       <button onClick={()=>{querystringdata()}}>Submit</button>
    </div>
  )
}
