import { IconButton } from '@chakra-ui/react'
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'

export default function IconBtn({ isTrash, onClick }) {

    return (
        <IconButton isRound={true} variant='solid' colorScheme='teal' aria-label={isTrash ? 'Delete' : 'Done'} fontSize='15px' icon={isTrash ? <DeleteIcon /> : <CheckIcon />}
        onClick={onClick} />
    )
}