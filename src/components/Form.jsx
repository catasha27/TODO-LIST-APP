import { FormControl, FormLabel, Input, Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import { useState } from "react";


export default function AddTask ({ onSubmit }) {

    const [task, setTask] = useState('');

    return (
        <FormControl w='80%' mx="auto" >
            <Flex alignItems='end' justifyContent="center">
                    <Flex direction='column' width='45%' mr="5">
                        <FormLabel>Task</FormLabel>
                        <Input type="text" border='2px' maxLength="50" placeholder="Add a task to the list" value={task} onChange={(e) => setTask(e.target.value)} />
                    </Flex>

                <IconButton  aria-label='Add task' type='submit' icon={<AddIcon />} onClick={(e) => onSubmit(task, e)} />
            </Flex>
        </FormControl>
    );
}
