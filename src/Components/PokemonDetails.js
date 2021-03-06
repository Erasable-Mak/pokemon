/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function PokemonDetails({Details,close,isopen}) {

    if(Details)
    {
        return (

            <div className={isopen?"flex h-screen bg-blue-300 rounded-l-xl md:top-0 right-0 fixed md:w-2/5 w-full flex-wrap":"hidden"}>
                <svg onClick={close} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black-700 mt-2 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>

                {/* Pokemon name, image, height and exp */}
                <div className="flex items-center bg-gray-800 md:m-5 mx-5 mt-2 rounded-xl w-full justify-between">
                    <div>
                        <p className="font-bold text-4xl text-white self-start ml-5">{Details.name}</p>
                        <p className="font-normal text-xl text-white self-start mt-2 ml-5">Height:{Details.height}</p>
                        <p className="font-normal text-xl text-white self-start mt-2 ml-5">Exp:{Details.base_experience}</p>
                    </div>
                

                    <div className="containerx">
                        <img src={Details.sprites.other.dream_world.front_default} />
                    </div>
                </div>
            
               {/* Pokemon Moves */}
               <div className=" w-full h-60 lg:h-96 rounded-xl w-full md:w-2/5 mx-5 mt-2 bg-gray-800 flex flex-col justify-center items-center">
                    <p className="font-bold text-white text-4xl ">Moves</p>
                    <div className="overflow-y-scroll flex flex-col justify-center my-2">
                        {Details.moves.map(({move:{name}})=>
                        <p className="font-normal text-cl text-white mt-2" >{name}</p>)}
                    </div>
                </div> 
                
                {/* Pokemon name, image and exp */}
                <div className=" w-full h-60 lg:h-96 rounded-xl w-full md:w-2/5 mx-5 mt-2 bg-gray-800 flex flex-col justify-center items-center">
                    <p className="font-bold text-white text-4xl ">Stats</p>
                    <div className="overflow-y-auto flex flex-col justify-center my-2">
                        {Details.stats.map(({base_stat,stat:{name}})=>
                        <p className="font-normal text-cl text-white mt-2">{name}:{base_stat}</p>)}
                    </div>
                </div>


            </div>

        )
}
else {
    return(
        null
    )
}
}
export default PokemonDetails