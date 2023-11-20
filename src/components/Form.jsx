// import { Box } from '@chakra-ui/react'
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'

export default function () {
    return (
        <FormControl>
            <Container maxW='80%' align="center" justify="center">
                <Flex minH='15vh'>
                    <Flex direction='column' width='45%'>
                        <FormLabel>Task</FormLabel>
                        <Input type="text" />
                        {/* <FormHelperText>Add a task to the list</FormHelperText> */}
                    </Flex>

                    <Spacer />

                    <Flex direction='column' width='45%'>
                        <FormLabel>Select an option</FormLabel>
                        <Select>
                            <option value="all">All</option>
                            <option value="complete">Complete</option>
                            <option value="incomplete">Incomplete</option>
                        </Select>
                    </Flex>
                </Flex>

                <Button type='submit' colorScheme="blackAlpha" variant="solid" width='35%'>
                    Add Task
                </Button>
            </Container>
        </FormControl>
    );
}
