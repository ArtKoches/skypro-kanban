import 'react-day-picker/dist/style.css'
import { DayPicker } from 'react-day-picker'
import styled from 'styled-components'
import { breakpoints } from '../../lib/breakpoints'

export const Calendar = styled.div`
    width: 182px;
    margin-bottom: 20px;

    @media screen and (max-width: ${breakpoints.lg}px) {
        max-width: 340px;
        width: 100%;
    }

    @media screen and (max-width: ${breakpoints.md}px) {
        width: 100%;
    }
`

export const CalendarTitle = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    color: ${props => props.theme.calendar.title};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;

    @media screen and (max-width: ${breakpoints.lg}px) {
        padding: 0;
    }
`

export const StyledDayPicker = styled(DayPicker)`
    margin: 0;
    color: #94a6be;
    font-size: 12px;

    --rdp-cell-size: 28px;
    --rdp-caption-font-size: 16px;
    --rdp-accent-color: ${props => props.theme.calendar.hover};
    --rdp-background-color: ${props => props.theme.calendar.hover};
    --rdp-selected-color: ${props => props.theme.calendar.text};

    p {
        margin-top: 14px;
        padding: 0 7px;

        span {
            color: ${props => props.theme.calendar.title};
        }
    }

    .rdp-cell {
        font-weight: 400;
    }
    .rdp-day_today {
        color: ${props => props.theme.calendar.text};
    }

    @media screen and (max-width: ${breakpoints.md}px) {
        --rdp-cell-size: 49px;
        --rdp-caption-font-size: 19px;
        font-size: 14px;
    }
`
