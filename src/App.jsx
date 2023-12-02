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

  return (
    <Flex minH='100vh' direction='column' alignItems='center' bgGradient='linear(to-b, #1100B7, #040041)' color='white' pb="5">
      <Header />
      <VStack w='600px' >
        <Form onSubmit={onSubmit} tasks={tasks}/>
        <Spacer />
        <TodoList tasks={tasks} deleteTask={deleteTask} />
      </VStack>
      <Spacer />
      <Footer />
    </Flex>
  );
}

export default App;