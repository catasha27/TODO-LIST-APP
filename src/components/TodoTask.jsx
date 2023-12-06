import IconBtn from "./IconBtn.jsx";
import { StarIcon } from '@chakra-ui/icons'
import { Box, ListItem, ListIcon, Spacer, ButtonGroup } from "@chakra-ui/react";


export default function TodoTask({ description, id, completed, deleteTask, toggle }) {
    return (
        <Box as={ListItem} justifyContent='space-between' fontSize='lg'
        style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'gray' : 'white' }}>
            <ListIcon as={StarIcon} color={completed ? 'gray' : 'blue.600'} />{description}

            {/* <Spacer /> */}

            <ButtonGroup>
                <IconBtn isTrash={false} onClick={() => toggle(id)} />
                <IconBtn isTrash={true} onClick={() => deleteTask(id)} />
            </ButtonGroup>
        </Box>
    );
}
