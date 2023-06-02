import Header from "./componants/header/Header";
import { ChakraProvider } from '@chakra-ui/react'
import Pokemon from "./componants/pokemon/Pokemon";
import { useEffect, useState } from "react";
import axios from 'axios';
import Pagination from "./componants/Pagination/Pagination";

function App() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nxtPage, setNxtPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pokemons, setPokemons] = useState();

  useEffect(()=>{
    let cancel;
    const search=async()=>{
      setLoading(true);
      const {data}=await axios.get(currentPage);
      setPrevPage(data.previous);
      setNxtPage(data.next);
      setLoading(false);
      setPokemons(data.results);
      console.log(data)
     }
     search();
     
  },[currentPage]);

  const prevClickHandler = () => {
    setCurrentPage(prevPage);
  }
  const  nextClickHandler = () => {
    setCurrentPage(nxtPage);
  }

  return (
    <>
    <ChakraProvider>
    <Header />
    <Pokemon pokemons={pokemons}/>
    <Pagination loading={loading} prevClickHandler={prevClickHandler} nextClickHandler={nextClickHandler} prevPage={prevPage} nxtPage={nxtPage}/>
    </ChakraProvider>
    </>
  );
}

export default App;
