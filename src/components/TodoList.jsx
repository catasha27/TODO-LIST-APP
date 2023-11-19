import { Box } from '@chakra-ui/react'
import TodoTask from "./TodoTask.jsx";

export default function TodoList() {
    return (
        <Box border='3px solid' borderColor='teal.300' rounded='md'>
            TodoList
            <TodoTask />
        </Box>
    )
}