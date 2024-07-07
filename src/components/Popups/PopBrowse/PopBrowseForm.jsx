import * as S from './PopBrowse.styled.js'

function PopBrowseForm({ foundTask }) {
    return (
        <>
            <S.FormBrowse.form action="#">
                <S.FormBrowse.form_block>
                    <S.FormBrowse.form_subtitle htmlFor="textArea01">
                        Описание задачи
                    </S.FormBrowse.form_subtitle>

                    <S.FormBrowse.form_textarea
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder="Введите описание задачи..."
                        defaultValue={foundTask?.description}
                    />
                </S.FormBrowse.form_block>
            </S.FormBrowse.form>
        </>
    )
}

export default PopBrowseForm
