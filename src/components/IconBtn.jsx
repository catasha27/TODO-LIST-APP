import { Box } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export default function IconBtn() {
    return (
        <Box border='3px solid' borderColor='orange.500' rounded='md'>
            <IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Done' fontSize='15px' icon={<CheckIcon />} />
        </Box>
    )
}