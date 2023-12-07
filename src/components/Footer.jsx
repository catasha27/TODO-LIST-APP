import { Text, Link } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Text fontSize='sm' mx="auto">
            Made with ♥ by 
            <Link href='https://github.com/catasha27' isExternal={'true'} fontStyle='italic' color='teal.600' fontSize={{base:'sm' , md:'lg'}}> Sharime Cahuas </Link>
            and
            <Link href='https://github.com/CorinaTalledo' isExternal={'true'} fontStyle='italic' color='red.500' fontSize={{base:'sm' , md:'lg'}}> Corina Talledo </Link>
        </Text>
    )
}