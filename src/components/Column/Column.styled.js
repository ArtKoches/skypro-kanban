import { breakpoints } from '../../lib/breakpoints'
import styled from 'styled-components'

export const Column = styled.div`
    width: 20%;
    margin: 0 auto;
    display: block;

    @media screen and (max-width: ${breakpoints.xl}px) {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
`

export const ColumnTitle = styled.div`
    padding: 0 10px;
    margin: 15px 0;

    p {
        color: #94a6be;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }
`
