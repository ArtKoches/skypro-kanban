import { useContext } from 'react'
import { ThemeContext } from './theme'

export function useThemeContext() {
    return useContext(ThemeContext)
}
