import { Center, Heading, Text, Image } from "@chakra-ui/react";
import board from '../assets/clipboard-list-solid-blue.svg'
import clip from '../assets/paperclip-solid-blue.svg'

export default function Header() {
  return (
    <Center alignItems='center' >
      <Image boxSize={{ base:'30px', sm:'50px', md:'70px'}} mr='20px' src={board} />
      <Heading as='h1'
        bgGradient='radial(teal 5%, teal.300, gray.300)'
        bgClip='text'
        fontSize={{ base:'5xl', sm:'6xl', md:'7xl'}}
        fontWeight='bold'
        // color='teal'
      >
        Todo List
      </Heading>
      <Image boxSize={{ base:'30px', sm:'40px', md:'55px'}} ml='20px' src={clip} />
    </Center>
  );
}
