import * as S from './PopNewCard.styled'

function PopNewCardForm() {
    return (
        <S.PopNewCardForm id="formNewCard" action="#">
            <S.FormNewBlock>
                <S.FormNewTitle htmlFor="formTitle">
                    Название задачи
                </S.FormNewTitle>

                <S.FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                />
            </S.FormNewBlock>

            <S.FormNewBlock>
                <S.FormNewTitle htmlFor="textArea">
                    Описание задачи
                </S.FormNewTitle>

                <S.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={''}
                />
            </S.FormNewBlock>
        </S.PopNewCardForm>
    )
}

export default PopNewCardForm
