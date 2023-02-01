import React from 'react'
import { useQuery } from 'react-query'
import { useState } from 'react'
function Pokedex({links}) {


    const urls = links.results
    
    const newLinks = urls.map(element =>element.url)
    

const boca3 = newLinks.map(element=>{


fetch(element).then((response) =>{
    if (response.ok){
     
           console.log(response.json())
    }
})

})




const  { isLoading, error, data} = useQuery('repoData3', () =>
    
    


    fetch(newLinks[150]).then(res =>
 res.json()
 )
 )  
 
  
if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message
 







  return (



    <div className = "border-2 h-1/2 w-1/2">
  

    <div>{data.name}</div>
    <img src = {data.sprites.front_default}></img>

    </div>
  )
}

export default Pokedex