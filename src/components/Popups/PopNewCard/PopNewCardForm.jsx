import * as S from './PopNewCard.styled'

function PopNewCardForm({ newCard, onChange }) {
    console.log(newCard)

    return (
        <S.PopNewCardForm action="#">
            <S.FormNewBlock>
                <S.FormNewTitle htmlFor="formTitle">
                    Название задачи
                </S.FormNewTitle>

                <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={newCard.title}
                    onChange={onChange}
                />
            </S.FormNewBlock>

            <S.FormNewBlock>
                <S.FormNewTitle htmlFor="textArea">
                    Описание задачи
                </S.FormNewTitle>

                <S.FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={newCard.description}
                    onChange={onChange}
                />
            </S.FormNewBlock>
        </S.PopNewCardForm>
    )
}

export default PopNewCardForm
