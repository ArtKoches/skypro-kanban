import { breakpoints } from '../../lib/breakpoints'
import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    background-color: ${props => props.theme.main.background};
`

export const MainBlock = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;

    @media screen and (max-width: ${breakpoints.xl}px) {
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`

export const MainContent = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: ${breakpoints.xl}px) {
        display: block;
    }
`
