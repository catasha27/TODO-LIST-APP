import { FormControl, FormLabel, FormErrorMessage, Input, Flex, IconButton, Icon } from "@chakra-ui/react";
import { AddIcon, WarningIcon } from '@chakra-ui/icons'
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
        <FormLabel htmlFor='tasktext' fontSize='lg'>Task</FormLabel>
        <Flex justifyContent='space-between' gap='4' >
          <Input type="text" id='tasktext' border='2px' maxLength="50" placeholder="Add a task to the list" 
          value={description} onChange={(e) => setDescription(e.target.value)} />
          <IconButton aria-label='Add task' type='submit' icon={<AddIcon />} />
        </Flex>
        <FormErrorMessage as='i' fontSize='md' fontWeight='medium'><Icon as={WarningIcon} mr='5px'></Icon> {error}</FormErrorMessage>
      </FormControl>


    </Flex>
  );
}
