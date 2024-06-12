import 'react-day-picker/dist/style.css'
import { DayPicker } from 'react-day-picker'
import styled from 'styled-components'

export const Calendar = styled.div`
    width: 182px;
    margin-bottom: 20px;
`

export const CalendarTitle = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const StyledDayPicker = styled(DayPicker)`
    margin: 0;
    color: #94a6be;
    font-size: 10px;

    --rdp-cell-size: 25px;
    --rdp-caption-font-size: 14px;
    --rdp-accent-color: #94a6be;
    --rdp-background-color: #eaeef6;

    svg {
        height: 10px;
    }

    p {
        margin-top: 14px;
        padding: 0 7px;

        span {
            color: #000000;
        }
    }
`
