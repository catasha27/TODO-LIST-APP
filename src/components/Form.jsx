import { FormControl, FormLabel, Input, Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import { useState } from "react";


export default function AddTask({ onSubmit }) {

  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.trim() !== "") {
      const task = {
        id: crypto.randomUUID(),
        description: description,
        completed: false
      }

      onSubmit(task);
      setDescription("");
    }


  };

  return (
    <Flex as='form' w='100%' mx='auto' alignItems='end' onSubmit={handleSubmit} >
      
      <FormControl direction='column' w='100%' mr="5">
        <FormLabel>Task</FormLabel>
        <Input type="text" border='2px' w='100%' maxLength="50" placeholder="Add a task to the list" value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormControl>

      <IconButton aria-label='Add task' type='submit' icon={<AddIcon />} />

    </Flex>
  );
}
