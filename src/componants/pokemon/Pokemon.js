import React, { useState } from 'react'
import {Text, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import axios from 'axios';
import Modal from '../modal/Modal'
function Pokemon({pokemons}) {

    const [details, setDetails] = useState();
    const [pokemon, setPokemon] = useState();
    const [modal, setModal] = useState(false);
   
    document.body.addEventListener('click',(e)=>{
        if(e.target.classList.contains('modal')){
            setModal(false);
        }
     });
     
    const handlePokemonClick = (name, url) => {
        const fetchData = async() => {
            const {data} = await axios.get(url);
            setDetails(data);
            console.log(data)
        }
        fetchData();
        setModal(true);
        setPokemon(name);
    }
    const renderPokemons = pokemons?.map((pokemon, index) => {
       return ( <GridItem  w='100%' h='200' bg='white' key={index} onClick={() => handlePokemonClick(pokemon.name, pokemon.url)}>
            <Flex h='200' alignItems='center' direction='column' justifyContent={'space-around'}>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.slice(34,pokemon.url.lastIndexOf())}.png`} alt={pokemon.name}/>
             <Text>{pokemon.name}</Text>
             </Flex>
        </GridItem>)
    })
  return (
    <>
    <Grid 
    bg={'tomato'}
    pt={20}
    height={1000}
    templateColumns='repeat(5, 1fr)' gap={6}
    >
        {renderPokemons}
   </Grid>
   <div className={modal?'modal':''}>
             {modal?<Modal pokemon={pokemon}  details={details}/>:null}
         </div>
   </>
  )
}

export default Pokemon