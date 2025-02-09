import { breakpoints } from '../../lib/breakpoints'
import styled, { keyframes } from 'styled-components'
import { topicStyles } from '../../lib/topic'

const CardAnimation = keyframes`    
0% {
        height: 0;
        opacity: 0;
    }
    100% {
        height: auto;
        opacity: 1;
    }     
`

export const Card = styled.div`
    width: 100%;
    display: block;
    position: relative;

    @media screen and (max-width: ${breakpoints.xl}px) {
        width: 100%;
        display: flex;
        overflow-y: auto;
    }
`

export const CardItem = styled.div`
    padding: 5px;
    animation: ${CardAnimation} 500ms linear;
`

export const CardWrapper = styled.div`
    width: 220px;
    height: 130px;
    background-color: ${props => props.theme.card.background};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;

    @media screen and (max-width: ${breakpoints.xl}px) {
        width: 220px;
        height: 130px;
        background-color: ${props => props.theme.card.background};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        padding: 15px 13px 19px;
    }
`

export const CardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardTopic = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({ $topic }) => topicStyles[$topic]};
`

export const TopicText = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({ $topic }) => topicStyles[$topic]};
`

export const CardBtn = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;

    div {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #94a6be;
    }
`

export const CardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

export const CardTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${props => props.theme.card.title};
    margin-bottom: 10px;
    word-break: break-all;
    text-decoration: ${props => (props.$done ? 'line-through' : 'none')};
`

export const CardDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    svg {
        width: 13px;
    }
`

export const CardDateTitle = styled.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
`
