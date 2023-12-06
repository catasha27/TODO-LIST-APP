import { Center, Heading, Image } from "@chakra-ui/react";
import board from '../assets/clipboard-list-solid-blue.svg'
import clip from '../assets/paperclip-solid-blue.svg'

export default function Header() {
  return (
    <Center alignItems='center'>
      <Image boxSize='70px' mr='20px' src={board} />
      <Heading as='h1'
        bgGradient='radial(gray.400, red.500 50%)'
        bgClip='text'
        fontSize='7xl'
        fontWeight='bold'
      >
        Todo List
      </Heading>
      <Image boxSize='55px' ml='20px' src={clip} />
    </Center>
  );
}
