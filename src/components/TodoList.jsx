import { Box } from '@chakra-ui/react'
import TodoTask from "./TodoTask.jsx";

export default function TodoList() {
    return (
        <Box border='3px solid' borderColor='teal.300' rounded='md' w="40%" minH="50vh" align="center" boxShadow='2xl' p='8' borderStyle='dashed' mx="auto" mt="4%">
            <TodoTask />
        </Box>
    )
}