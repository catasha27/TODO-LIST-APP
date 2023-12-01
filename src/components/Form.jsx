import { FormControl, FormLabel, FormErrorMessage, Input, Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import { useState } from "react";


export default function AddTask({ onSubmit, tasks }) {

  const [description, setDescription] = useState('');
  const [error, setError] = useState('')

  const validateForm = () => {
    if (description.trim() === "") {
      return "Please complete this field"
    }
    const isRepeated = tasks.find((task) => task.description.toLowerCase() === description.toLowerCase())
    if (isRepeated) {
      return "This task already exists, please double check the existing tasks"
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const error = validateForm()
    if (!error) {
      const task = {
        id: crypto.randomUUID(),
        description: description,
        completed: false
      }
      setError('')
      onSubmit(task);
      setDescription('');

    } else {
      setError(error)
    }
  };

  return (
    <Flex as='form' noValidate w='100%' mx='auto' alignItems='end' justifyContent='center' onSubmit={handleSubmit} >

      <FormControl direction='column' w='100%' isRequired isInvalid={error}>
        <FormLabel>Task</FormLabel>
        <Flex justifyContent='space-between' gap='4' >
          <Input type="text" border='2px' maxLength="50" placeholder="Add a task to the list" value={description} onChange={(e) => setDescription(e.target.value)} />
          <IconButton aria-label='Add task' type='submit' icon={<AddIcon />} />
        </Flex>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>


    </Flex>
  );
}
