import React from 'react'
import {  useQuery } from 'react-query'
import Navbar from './components/Navbar'
import Main from "./components/Main"
import Pokedex from './Pokedex'
import  "./App.css"
function App() {
 // https://pokeapi.co/api/v2/pokemon?limit=151
 const  { isLoading, error, data} = useQuery('repoData2', () =>

fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(res =>
 res.json()
 )
 )  
 
  
if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message
 

 
  
  return (
    <div className= "flex-col justify-center align-middle font-bold gap-1 bg-slate-500 h-screen ">
   
  <Navbar/>
  <Main/>
  < Pokedex links ={data}/>
   
    </div>
  )
}

export default App

