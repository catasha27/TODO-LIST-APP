import { IconButton } from '@chakra-ui/react'
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'

export default function IconBtn({ isTrash, onClick, toggle }) {

    return (
        <IconButton 
            isRound={true}
            variant='solid'
            colorScheme={isTrash ? 'red' : toggle ? 'gray' : 'teal'}
            aria-label={isTrash ? 'Delete' : 'Done'}
            fontSize='15px'
            icon={isTrash ? <DeleteIcon /> : <CheckIcon />}
            onClick={onClick}
            toggle={toggle}
        />
    )
}