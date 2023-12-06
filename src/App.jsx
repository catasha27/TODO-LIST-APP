import { useState } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";
import Footer from "./components/Footer.jsx";
import { Flex, Spacer, VStack } from '@chakra-ui/react';


function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const onSubmit = (task) => {
    const newTask = [...tasks, task]
    localStorage.setItem('tasks', JSON.stringify(newTask))
    setTasks(newTask)
  }

  const deleteTask = (id) =>{
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  const toggle = (id) => {
    const newArray = [...tasks]
    const completedTask = newArray.find(task => task.id === id)
    completedTask.completed = !completedTask.completed
    setTasks(newArray)
    localStorage.setItem('tasks', JSON.stringify(newArray))
  };


  return (
    <Flex minH='100vh' direction='column' alignItems='center' bgGradient='radial(#1700f8db, #1100B7, #08017d, #040041)' color='white' pb="5">
      <Header />
      <VStack w={{ base:'310px', sm:'450px', md:'600px'}} >
        <Form onSubmit={onSubmit} tasks={tasks}/>
        <Spacer />
        <TodoList tasks={tasks} deleteTask={deleteTask} toggle={toggle} />
      </VStack>
      <Spacer />
      <Footer />
    </Flex>
  );
}

export default App;