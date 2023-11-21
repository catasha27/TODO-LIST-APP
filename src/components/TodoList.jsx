import TodoTask from "./TodoTask.jsx";
import { UnorderedList, Flex, FormControl, FormLabel, Select, Spacer } from '@chakra-ui/react'

export default function TodoList() {
    return (
        <Flex direction="column" w="600px" mx="auto">

            <FormControl>
                <FormLabel>Select an option</FormLabel>
                    <Select border='2px'>
                        <option value="">All</option>
                        <option value="complete">Completed</option>
                        <option value="incomplete">Incompleted</option>
                    </Select>
            </FormControl>

            <Spacer />

            <UnorderedList border='3px solid' borderColor='teal.300' rounded='md' minH="30vh" boxShadow='2xl' p='10' borderStyle='dashed' my="4%">
                <TodoTask />
            </UnorderedList>
        </Flex>
    )
}
