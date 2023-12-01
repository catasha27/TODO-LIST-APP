import TodoTask from "./TodoTask.jsx";
import { 
    UnorderedList, 
    Flex, 
    FormControl, 
    FormLabel, 
    Select, 
    Spacer,
    Text } from '@chakra-ui/react'

export default function TodoList({ tasks }) {

    return (
        <Flex direction='column' w='100%' mx="auto">

            <FormControl>
                <FormLabel>Select an option</FormLabel>
                    <Select border='2px'>
                        <option value="">All</option>
                        <option value="complete">Completed</option>
                        <option value="incomplete">Incompleted</option>
                    </Select>
            </FormControl>

            <Spacer />

            <UnorderedList border='3px solid' borderColor='teal.300' rounded='md' minH="30vh" boxShadow='2xl' marginInlineStart={0} p='10' borderStyle='dashed' my="4%">
                {tasks.length ? tasks.map((task) => (
                    <TodoTask 
                        key={task.id} 
                        id={task.id}
                        description={task.description}
                        completed={task.completed}
                    />)
                ) : <Text>NO TASKS TO RENDER</Text>
                }
                
            </UnorderedList>
        </Flex>
    )
}
