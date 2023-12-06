import IconBtn from "./IconBtn.jsx";
import { ListItem, Spacer, ButtonGroup } from "@chakra-ui/react";


export default function TodoTask({ description, id, completed, deleteTask, toggle }) {
    return (
        <ListItem style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'gray' : 'white' }}>{description}

            <Spacer />

            <ButtonGroup>
                <IconBtn isTrash={false} onClick={() => toggle(id)} />
                <IconBtn isTrash={true} onClick={() => deleteTask(id)} />
            </ButtonGroup>
        </ListItem>
    );
}
