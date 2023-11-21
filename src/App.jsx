// import { Box } from '@chakra-ui/react'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";
import Footer from "./components/Footer.jsx";
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <Flex minH='100vh' direction="column" bgGradient='linear(to-b, #1100B7, #040041)' color='white'>
      {/* <Box border='3px solid' borderColor='pink.600' rounded='md'> */}
        <Header />
        <Form />
        <TodoList />
        <Footer />
      {/* </Box> */}
    </Flex>
    );
}

export default App;