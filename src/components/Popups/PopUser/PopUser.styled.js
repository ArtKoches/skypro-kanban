import { Hover03 } from '../../../Common.styled'
import styled from 'styled-components'
import { breakpoints } from '../../../lib/breakpoints'

export const PopUserSet = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid ${props => props.theme.userPopup.border};
    background: ${props => props.theme.userPopup.background};
    box-shadow: 0px 10px 39px 0px ${props => props.theme.userPopup.boxShadow};
    padding: 34px;
    text-align: center;
    z-index: 2;

    @media screen and (max-width: ${breakpoints.sm}px) {
        z-index: 7;
    }

    @media screen and (max-width: ${breakpoints.md}px) {
        z-index: 7;
    }
`

export const PopUserSetName = styled.p`
    color: ${props => props.theme.userPopup.text};
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`

export const PopUserSetMail = styled(PopUserSetName)`
    color: #94a6be;
    font-weight: 100;
    margin-bottom: 10px;
`

export const PopUserSetTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    p {
        color: ${props => props.theme.userPopup.text};
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
    }

    input[type='checkbox'] {
        position: relative;
        width: 24px;
        height: 13px;
        border-radius: 100px;
        background: #eaeef6;
        outline: none;
        appearance: none;

        &::before {
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background-color: ${props => props.theme.userPopup.themeSwitchBtn};
            transition: 0.5s;
        }

        &:checked::before {
            left: 12px;
        }
    }
`

export const PopUserExitBtn = styled.button`
    width: 72px;
    height: 30px;
    background: transparent;
    color: ${props => props.theme.header.color};
    border-radius: 4px;
    border: 1px solid ${props => props.theme.header.color};

    a {
        color: ${props => props.theme.header.color};
    }

    ${Hover03}
`
