import IconBtn from "./IconBtn.jsx";
import { ListItem } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";

export default function TodoTask() {
    return (
        <Flex>
            <ListItem>Lorem ipsum dolor sit</ListItem>

            <Spacer />

            <ButtonGroup>
                <IconBtn isTrash={false} />
                <IconBtn isTrash={true} />
            </ButtonGroup>
        </Flex>
    );
}
