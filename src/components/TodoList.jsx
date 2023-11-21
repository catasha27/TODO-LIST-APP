import TodoTask from "./TodoTask.jsx";
import { UnorderedList } from '@chakra-ui/react'

export default function TodoList() {
    return (
        <UnorderedList border='3px solid' borderColor='teal.300' rounded='md' w="600px" minH="30vh" boxShadow='2xl' p='10' borderStyle='dashed' mx="auto" my="4%">
            <TodoTask />
        </UnorderedList>
    )
}
