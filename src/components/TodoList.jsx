import TodoTask from "./TodoTask.jsx";
import { useState } from "react";
import { 
    Box,
    UnorderedList, 
    Flex, 
    FormControl, 
    FormLabel, 
    Select, 
    Spacer,
    Text } from '@chakra-ui/react'

export default function TodoList({ tasks, deleteTask, toggle }) {

    const [filterValue, setFilterValue] = useState("")

    let filteredTasks = tasks

    if(filterValue==="complete") {
        filteredTasks = tasks.filter((task) => task.completed)
    } 
    if(filterValue==="incomplete") {
        filteredTasks = tasks.filter((task) => !task.completed)
    } 

    return (
        <Flex direction='column' w='100%' mx="auto">

            <FormControl onChange={(e) => setFilterValue(e.target.value)}>
                <FormLabel fontSize='lg'>Select an option</FormLabel>
                    <Select border='2px'>
                        <Box as='option' color='#3182CE' fontWeight='normal' value="">All</Box>
                        <Box as='option' color='#3182CE' fontWeight='normal' value="complete">Completed</Box>
                        <Box as='option' color='#3182CE' fontWeight='normal' value="incomplete">Incompleted</Box>
                    </Select>
            </FormControl>

            <Spacer />

            <UnorderedList border='3px solid' borderColor='teal.300' rounded='md' minH="30vh" boxShadow='2xl' marginInlineStart={0} p={{ base:'4', sm:'6', md:'10'}} borderStyle='dashed' my="4%" styleType='none'>
                {filteredTasks.length ? filteredTasks.map((task) => (
                    <TodoTask 
                        key={task.id} 
                        id={task.id}
                        description={task.description}
                        completed={task.completed}
                        deleteTask={deleteTask}
                        toggle={toggle}
                    />)
                ) : <Text>NO TASKS TO RENDER</Text>
                }
                
            </UnorderedList>
        </Flex>
    )
}
