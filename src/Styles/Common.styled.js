import styled, { css } from 'styled-components'
import { breakpoints } from '../lib/breakpoints'
import { Link } from 'react-router-dom'

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

/*start modal styles*/
export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #eaeef6;
`

export const ModalContainer = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${breakpoints.sm}px) {
        background-color: #ffffff;
    }
`

export const ModalBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

    @media screen and (max-width: ${breakpoints.sm}px) {
        max-width: 368px;
        width: 100%;
        padding: 0 16px;
        border-radius: none;
        border: none;
        box-shadow: none;
    }
`

export const ModalTitle = styled.div`
    h2 {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.6px;
        margin-bottom: 20px;
    }
`

export const ModalFormLogin = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModalInput = styled.input`
    width: 100%;
    min-width: 100%;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    outline: none;
    padding: 10px 8px;

    &:first-child {
        margin-bottom: 7px;
    }

    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: #94a6be;
    }
`

export const ModalRegInput = styled(ModalInput)`
    &:not(:last-child) {
        margin-bottom: 7px;
    }
`

export const ModalBtn = styled.button`
    width: 100%;
    height: 30px;
    background-color: #565eef;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #ffffff;

    ${Hover01}

    @media screen and (max-width: ${breakpoints.sm}px) {
        height: 40px;
    }
`

export const ModalLink = styled(Link)`
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
    text-decoration: underline;
`

export const MainLink = styled(ModalLink)`
    text-decoration: none;
`

export const ModalFormGroup = styled.div`
    text-align: center;

    p {
        color: rgba(148, 166, 190, 0.4);
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.14px;
    }
`
/*end modal styles*/
