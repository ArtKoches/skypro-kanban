import { breakpoints } from '../../../lib/breakpoints'
import styled from 'styled-components'

export const PopExit = styled.div`
    /* display: none; */
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
`

export const PopExitContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.exitPopup.container};
`

export const PopExitBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${props => props.theme.exitPopup.background};
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid ${props => props.theme.exitPopup.border};
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

    @media only screen and (max-width: ${breakpoints.sm}px) {
        padding: 50px 20px;
    }
`

export const PopExitTitle = styled.div`
    h2 {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.4px;
        margin-bottom: 20px;
        color: ${props => props.theme.exitPopup.title};
    }
`

export const PopExitForm = styled.form``

export const PopExitFormGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: ${breakpoints.sm}px) {
        display: block;
    }
`
