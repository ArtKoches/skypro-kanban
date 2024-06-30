import { useState } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { StyledDayPicker } from './Calendar.styled'
import * as S from './Calendar.styled'

function Calendar() {
    const [selected, setSelected] = useState()

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
