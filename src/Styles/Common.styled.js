import styled, { css } from 'styled-components'
import { breakpoints } from '../lib/breakpoints'

export const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #f1f1f1;
`

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`

export const Hover01 = css`
    &:hover {
        background-color: #33399b;
    }
`

export const Hover02 = css`
    &:hover {
        color: #33399b;
    }

    &:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }
`

export const Hover03 = css`
    &:hover {
        background-color: #33399b;
        color: #ffffff;
    }

    &:hover a {
        color: #ffffff;
    }
`

export const PopTarget = css`
    &:target {
        display: block;
    }
`

export const Button = styled.button`
    width: 153px;
    height: 30px;
    background-color: ${props => (props.$exit ? '#565eef' : 'transparent')};
    border-radius: 4px;
    border: ${props =>
        props.$exit ? 'none' : '0.7px solid var(--palette-navy-60, #565eef)'};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #ffffff;
    margin-right: ${props => (props.$exit ? '10px' : '0')};

    a {
        width: 100%;
        height: 100%;
        color: ${props => (props.$exit ? '#ffffff' : '#565eef')};
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ${props => (props.$exit ? Hover01 : Hover03)}

    @media only screen and (max-width: ${breakpoints.sm}px) {
        width: 100%;
        height: 40px;
        margin-right: ${props => (props.$exit ? 0 : '')};
        margin-bottom: ${props => (props.$exit ? '10px' : '')};
    }
`
