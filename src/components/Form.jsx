import { FormControl, FormLabel, Input, Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'


export default function () {
    return (
        <FormControl w='80%' mx="auto">
            <Flex alignItems='end' justifyContent="center">
                    <Flex direction='column' width='45%' mr="5">
                        <FormLabel>Task</FormLabel>
                        <Input type="text" border='2px' maxLength="50" placeholder="Add a task to the list" />
                    </Flex>

                <IconButton  aria-label='Add task' type='submit' icon={<AddIcon />} />
            </Flex>
        </FormControl>
    );
}
