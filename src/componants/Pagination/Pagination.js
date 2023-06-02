import React from 'react'
import { Center, Button, Stack } from '@chakra-ui/react'
function Pagination({prevPage, nxtPage, prevClickHandler, nextClickHandler, loading}) {
    const prevClick = (e) => {

    }
  return (
   
    <Center bg='tomato' h='100px' color='white' fontWeight={'bold'}>
    <Stack spacing={4} direction='row' align='center'>
        {prevPage && <Button onClick={prevClickHandler} colorScheme='teal' size='md'>Previous</Button>}
        {nxtPage && <Button onClick={nextClickHandler} colorScheme='teal' size='md'>Next</Button>}
    </Stack>
  </Center>
  )
}

export default Pagination