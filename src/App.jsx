import { Box } from '@chakra-ui/react'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <Box border='3px solid' borderColor='pink.600' rounded='md'>
      <Header />
      <Form />
      <TodoList />
      <Footer />
    </Box>
    );
}

export default App;