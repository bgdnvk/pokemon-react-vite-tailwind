import Moves from "./Moves"

const Card = ({pokemonJson}: any) => {

    console.log('---------inside card', pokemonJson)
    
    const singlePokemonData = pokemonJson.pokemonDataById
    const speciesPokemondata = pokemonJson.pokemonDataSpecies

    console.log('data by id',singlePokemonData)
    console.log(pokemonJson)
    
    return(
        <div className="flex-auto">
            <h1>{singlePokemonData.name}</h1>

            <p>ID: {singlePokemonData.id}</p>
            <div>
                <p>types:</p>
                {singlePokemonData.types.map((e: any, _i: any) => <p key={_i}> {e.type.name}</p>)}
            </div>
            <img src={singlePokemonData.sprites.front_default}></img>
            <img src={singlePokemonData.sprites.back_default}></img>
            <img src={singlePokemonData.sprites.other.dream_world.front_default}></img>
            <button
            className="uppercase rounded shadow-md hover:bg-yellow-100 text-yellow-700"
            >add to favourites</button>
            <p>name in Japanese: {speciesPokemondata.names[0].name}</p>
            <p>generation: {speciesPokemondata.generation.name}</p>
            <p>About: {speciesPokemondata.flavor_text_entries[0].flavor_text}</p>

            {/* <div>
                <p>moves</p>
                <ul>
                    {singlePokemonData.moves.map((e: any, _i:any) => <li key={_i}>{e.move.name}</li>)}
                </ul>
                <br></br>
            </div> */}

            
            <Moves 
            moves={singlePokemonData.moves}
            ></Moves>

        </div>
    )
}

export default Card