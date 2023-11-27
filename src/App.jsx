import { useState } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";
import Footer from "./components/Footer.jsx";
import { Flex, Spacer } from '@chakra-ui/react';


function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const onSubmit = (task, e) =>{
    e.preventDefault()
    const newTask = [...(tasks || []), { task }]
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
    setTasks(newTask)
  }


  return (
    <Flex minH='100vh' direction="column" bgGradient='linear(to-b, #1100B7, #040041)' color='white' pb="5">
        <Header />
        <Form onSubmit={onSubmit} />
        <Spacer />
        <TodoList tasks={tasks} />
        <Spacer />
        <Footer />
    </Flex>
    );
}

export default App;