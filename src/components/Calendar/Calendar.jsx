import * as S from './Calendar.styled'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { StyledDayPicker } from './Calendar.styled'
import { useState } from 'react'

function Calendar({ date }) {
    const [selected, setSelected] = useState(null)

    date = selected
    console.log(date)

    const footer = selected ? (
        <p>
            Срок исполнения:{' '}
            <span>{format(selected, 'dd.MM.yy.', { locale: ru })}</span>{' '}
        </p>
    ) : (
        <p>Выберите срок исполнения.</p>
    )

    return (
        <S.Calendar>
            <S.CalendarTitle>Даты</S.CalendarTitle>
            <StyledDayPicker
                locale={ru}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
        </S.Calendar>
    )
}

export default Calendar
