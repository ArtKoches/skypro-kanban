import styled from 'styled-components'
import { Button } from '../../Common.styled'
import { Link } from 'react-router-dom'

export const ErrorPage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #f0f0f0;
`

export const ErrorPageImg = styled.img`
    width: 100%;
    height: 100%;
`

export const ErrorPageBtn = styled(Button)`
    position: fixed;
    border: 1px solid black;
    background-color: #9b755c;
    border-radius: 20px;
    height: 36px;
`

export const ErrorPageLink = styled(Link)`
    font-size: 20px;
`
