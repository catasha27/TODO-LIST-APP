import { Box } from '@chakra-ui/react'
import IconBtn from "./IconBtn.jsx";


export default function TodoTask() {
    return (
        <Box border='3px solid' borderColor='pink.900' rounded='md'>
            TodoTask
            <IconBtn />
            <IconBtn />
        </Box>
    )
}