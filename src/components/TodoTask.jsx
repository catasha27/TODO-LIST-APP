import IconBtn from "./IconBtn.jsx";
import { ListItem, Spacer, ButtonGroup } from "@chakra-ui/react";


export default function TodoTask({ description, id, completed, deleteTask }) {
    return (
        <ListItem>{description}
            <Spacer />

            <ButtonGroup>
                <IconBtn isTrash={false} />
                <IconBtn isTrash={true} onClick={() => deleteTask(id)} />
            </ButtonGroup>
        </ListItem>
    );
}
