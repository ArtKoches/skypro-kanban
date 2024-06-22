import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ErrorPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 100px;
    background-color: #ffffff;
`

export const ErrorPageTitle = styled.h1`
    color: #fd6051;
`

export const ErrorPageImg = styled.img`
    width: 70%;
    height: 70%;
`

export const ErrorPageLink = styled(Link)`
    font-size: 20px;
`
