import React from 'react'
import { Center, Heading } from '@chakra-ui/react'

export default function Header() {
  return (
    <Center bg="tomato" h='100px' color='teal' fontWeight={'bold'} >
    <Heading as='h1' size='4xl' noOfLines={1}>POKEDEX</Heading>
  </Center>
  )
}
