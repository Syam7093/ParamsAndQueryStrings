import React, { useState } from 'react'
// query string....
export const UrlstringUsingdata = () => {
 const [select,setselect]=useState('')
 const [rating,setrating]=useState('')

 
    const dataone={
        method:"GET"
    }

    const getalldata=async()=>{
        // this is urlquerystring

        let url=`https://fakestoreapi.com/products?price=${select}&rating=${rating}`
        console.log("querystring",url)
        let personaldata=await fetch(url,dataone)
        let convdata=await personaldata.json()
        console.log(convdata,"syam")
    } 

  return (
    <div>
        <button onClick={()=>{getalldata()}}>SUBMIT</button>
        <select onChange={(e)=>{setselect(e.target.value)}}>
            <option>109.95</option>
            <option>sundar</option>
            <option>sai</option>
        </select>

        <select onChange={(e)=>{setrating(e.target.value)}}>
            <option>10</option>
            <option>5</option>
            <option>3</option>
        </select>
    </div>
  )
}
