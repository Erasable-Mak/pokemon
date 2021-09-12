import React from 'react'

//Left side click function

function Pokemon({pokemon,Details ,open}) {
    return (
        <div className="containery">
        <div  className="flx flex-col justify-center items-center">
            {pokemon.map(({name,url})=>
            <div onClick={open} className="bg-blue-300 flex border-4 justify-center items-center m-0 p-3 "  key={name}>
                <p className=" text-xl font-bold " onClick={()=>Details(url)}>{name}</p>
            </div>)}
        </div>
        </div>
    )
}

export default Pokemon
