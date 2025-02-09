import { Hover01, Hover02 } from '../../Common.styled'
import styled from 'styled-components'
import { breakpoints } from '../../lib/breakpoints'

export const Header = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${props => props.theme.header.background};
`

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`

export const HeaderLogo = styled.div`
    img {
        width: 85px;
    }
`

export const HeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderCreateBtn = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;

    ${Hover01}

    a {
        color: #ffffff;
    }

    @media screen and (max-width: ${breakpoints.md}px) {
        z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        border-radius: 4px;
        margin-right: 0;
    }
`

export const HeaderUser = styled.a`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.header.color};

    &::after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid ${props => props.theme.header.color};
        border-bottom: 1.9px solid ${props => props.theme.header.color};
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    }

    ${Hover02}
`
