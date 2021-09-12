/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from 'react'
import {fetchApi,fetchDetails,cancel} from "./Api";
import Pokemon from"./Components/Pokemon";
import PokemonDetails from "./Components/PokemonDetails"
import hero from "./images/pokemonhunts.png"
import "./App.css";
function App() {
const [pokemons, setpokemons] = useState([]);
const [nexturl,setnexturl]=useState("");
const [prevurl, setprevurl] = useState("");
const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=11")
const [Pokedetails, setPokedetails] = useState();
const [isopen, setisopen] = useState(false)
useEffect(() => {
  const fetchPokemon = async()=>{
    const res = await fetchApi(url);
    setpokemons(res.results);
    setprevurl(res.previous);
    setnexturl(res.next);
  }
  fetchPokemon();
  return () => {
    cancel();
  }
}, [url])

const open=()=>{
  setisopen(true);
}

const close=()=>{
  setisopen(false);
}

const NextPage=()=>{
  seturl(nexturl);
}
const Previouspage=()=>{
  seturl(prevurl);
}

const PokeDetails=async(url1)=>{
    const res = await fetchDetails(url1);
    setPokedetails(res);     
}

console.log(Pokedetails);

  return (
    <div className="flexd">
   <div className="flex justify-between" >
     <div className="flex flex-col ">

    

     <Pokemon pokemon={pokemons} Details={PokeDetails} open={open} />
   <div className="bg-blue-300 border-4 py-1">
     {nexturl?<button onClick={NextPage} className="bg-blue-300 p-3 m-1 border-4 rounded-xl text-black">Next</button>:null}
     {prevurl?<button onClick={Previouspage} className="bg-blue-300 p-3 m-1 border-4 rounded-xl text-black">Previous</button>:null}
   </div>
   
     </div>
     
   <img className="img stick" src={hero} alt="hero" /> 
     <PokemonDetails Details={Pokedetails} close={close} isopen={isopen} />
     <div className="container">
          <h3 className="pcs">Pokemon !!</h3><br/>
          <h3 className="pcsc">“Even If we don’t understand each other, that’s not a reason to reject each other. There are two sides to any argument. Is there one point of view that has all the answers? Give it some thought.” – Alder</h3><br/>
          <h3 className="pcsc">“Make your wonderful dream a reality, it will become your truth. If anyone can, it’s you.” – N, Pokemon Black/White</h3><br/>
          <h3 className="pcsc">“Take charge of your destiny.” – Rayquaza</h3><br/>
          <h3 className="pcsc">“The important thing is not how long you live. It’s what you accomplish with your life.” – Grovyle</h3>
         
       </div>
       <div className="containerz">
          <h3 className="pcse">Click on left side names and Next & Previous buttons !!</h3>
       </div>
   </div>
   </div>
  );

  
}




export default App;