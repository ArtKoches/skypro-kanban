import { useContext } from 'react'
import { CardContext } from './card'

export function useCardContext() {
    return useContext(CardContext)
}
