import IconBtn from "./IconBtn.jsx";
import { ListItem, Spacer, ButtonGroup } from "@chakra-ui/react";


export default function TodoTask() {
    return (
        <ListItem>Lorem ipsum dolor sit
            <Spacer />

            <ButtonGroup>
                <IconBtn isTrash={false} />
                <IconBtn isTrash={true} />
            </ButtonGroup>
        </ListItem>
    );
}
