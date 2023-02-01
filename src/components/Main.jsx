import React from 'react'
import Example from "./Example"
import {useQuery } from 'react-query'
import { useState } from 'react';
function Main() {


  let [id, boca ] = useState(1)

  const  { isLoading, error, data, refetch } = useQuery('repoData', () => 

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res =>
res.json()
)

)  


function boca2(){
  boca(id+1)

}
console.log(id)
if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message

   
  return (
    <div className="border-2 w-1/2 flex-col justify-center align-middle p-10" >
        
     <button onClick={
      ()=> 
      boca2(refetch)
      
       } >click</button>
      
     <p>{id}</p>
     <p>{data.name}</p>
     <img src ={data.sprites.front_default
}></img>
    </div>
  )
}

export default Main


