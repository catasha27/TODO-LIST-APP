import IconBtn from "./IconBtn.jsx";
import { ListItem, Spacer, ButtonGroup } from "@chakra-ui/react";


export default function TodoTask({ task }) {
    return (
        <ListItem>{task}
            <Spacer />

            <ButtonGroup>
                <IconBtn isTrash={false} />
                <IconBtn isTrash={true} />
            </ButtonGroup>
        </ListItem>
    );
}
