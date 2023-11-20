import { Box } from '@chakra-ui/react'
import TodoTask from "./TodoTask.jsx";
import { UnorderedList } from '@chakra-ui/react'

export default function TodoList() {
    return (
        <Box border='3px solid' borderColor='teal.300' rounded='md' w="40%" minH="50vh" boxShadow='2xl' p='10' borderStyle='dashed' mx="auto" mt="4%">
            <UnorderedList >
                <TodoTask />
            </UnorderedList>
        </Box>
    )
}
