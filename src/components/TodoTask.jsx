import IconBtn from "./IconBtn.jsx";
import { StarIcon } from '@chakra-ui/icons'
import { Box, ListItem, ListIcon, Text, Spacer, ButtonGroup } from "@chakra-ui/react";


export default function TodoTask({ description, id, completed, deleteTask, toggle }) {
    return (
        <Box as={ListItem} display='flex' alignItems='center' fontSize='lg' mb='10px'
        textDecoration={completed ? 'line-through' : 'none'} color={completed ? 'gray.500' : 'white'}>

            <ListIcon as={StarIcon} color={completed ? 'gray' : 'blue.600'} />
            {description}

            <Spacer />

            <ButtonGroup gap='10px'>
                <IconBtn isTrash={false} onClick={() => toggle(id)} />
                <IconBtn isTrash={true} onClick={() => deleteTask(id)} />
            </ButtonGroup>
            
        </Box>
    );
}
