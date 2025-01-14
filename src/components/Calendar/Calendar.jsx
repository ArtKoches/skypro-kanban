import * as S from './Calendar.styled'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { StyledDayPicker } from './Calendar.styled'

function Calendar({ disabled, selected, setSelected, foundTask }) {
    const fromDate = new Date()

    const footer = () => {
        if (disabled) {
            return (
                <p>
                    Срок исполнения: {''}
                    <span>
                        {new Date(foundTask?.date).toLocaleDateString()}
                    </span>
                </p>
            )
        } else if (selected) {
            return (
                <p>
                    Срок исполнения: {''}
                    <span>{format(selected, 'dd.MM.yy.', { locale: ru })}</span>
                </p>
            )
        } else {
            return <p>Выберите срок исполнения.</p>
        }
    }

    return (
        <S.Calendar>
            <S.CalendarTitle>Даты</S.CalendarTitle>
            <StyledDayPicker
                locale={ru}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer()}
                fromDate={fromDate}
                disabled={disabled}
            />
        </S.Calendar>
    )
}

export default Calendar
