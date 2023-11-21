import { IconButton } from '@chakra-ui/react'
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'

export default function IconBtn({ isTrash }) {
    return (
        <IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Done' fontSize='15px' icon={ isTrash ? <DeleteIcon /> : <CheckIcon />} />
    )
}