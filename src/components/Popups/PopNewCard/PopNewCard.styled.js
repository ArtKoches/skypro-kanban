import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Hover01, PopTarget } from '../../../Common.styled'
import { breakpoints } from '../../../lib/breakpoints'
import { topicStyles } from '../../../lib/topic'

export const PopNewCard = styled.div`
    /* display: none; */
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;

    ${PopTarget}

    @media screen and (max-width: ${breakpoints.lg}px) {
        top: 70px;
    }
`

export const PopNewCardContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);

    @media screen and (max-width: ${breakpoints.md}px) {
        padding: 0;
        justify-content: flex-start;
    }

    @media screen and (max-width: ${breakpoints.lg}px) {
        padding: 0;
        justify-content: flex-start;
    }
`

export const PopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    position: relative;

    @media screen and (max-width: ${breakpoints.md}px) {
        padding: 20px 16px 32px;
    }

    @media screen and (max-width: ${breakpoints.lg}px) {
        border-radius: 0;
    }
`

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`

export const PopNewCardTitle = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`

export const PopNewCardClose = styled(Link)`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94a6be;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`

export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: ${breakpoints.lg}px) {
        display: block;
    }
`

export const Categories = styled.div`
    margin-bottom: 20px;
`

export const CategoriesSubtitle = styled.p`
    margin-bottom: 14px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const CategoriesThemes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`

export const CategoriesThemeTitle = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
`

export const CategoriesTheme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    background-color: ${({ $topicColor }) =>
        topicStyles[$topicColor]?.backgroundColor || '#b4fdd1'};

    &:first-child {
        opacity: 1 !important;
    }

    ${CategoriesThemeTitle} {
        color: ${({ $topicColor }) =>
            topicStyles[$topicColor]?.color || '#06b16e'};
    }
`

export const FormNewCreateBtn = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565eef;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #ffffff;
    float: right;

    ${Hover01}

    @media screen and (max-width: ${breakpoints.md}px) {
        width: 100%;
        height: 40px;
    }
`

export const PopNewCardForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: ${breakpoints.md}px) {
        max-width: 100%;
        width: 100%;
        display: block;
    }
`

export const FormNewBlock = styled.div`
    display: flex;
    flex-direction: column;

    input,
    textarea {
        width: 100%;
        outline: none;
        padding: 14px;
        background: transparent;
        border: 0.7px solid rgba(148, 166, 190, 0.4);
        border-radius: 8px;
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;

        &::placeholder {
            font-weight: 400;
            font-size: 14px;
            line-height: 1px;
            color: #94a6be;
            letter-spacing: -0.14px;
            font-family: 'Roboto', sans-serif;
        }
    }
`

export const FormNewTitle = styled.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const FormNewInput = styled.input`
    margin: 20px 0;
`

export const FormNewArea = styled.textarea`
    max-width: 370px;
    margin-top: 14px;
    height: 200px;

    &::placeholder {
        padding-top: 7px;
    }

    @media screen and (max-width: ${breakpoints.md}px) {
        max-width: 100%;
        height: 34px;
    }
`
