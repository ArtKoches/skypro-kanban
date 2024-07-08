import * as S from './PopBrowse.styled.js'

function PopBrowseForm({ foundTask, editTask, isEdit, onChange }) {
    return (
        <>
            <S.FormBrowse.form action="#">
                <S.FormBrowse.form_block>
                    <S.FormBrowse.form_subtitle htmlFor="textArea01">
                        Описание задачи
                    </S.FormBrowse.form_subtitle>

                    <S.FormBrowse.form_textarea
                        name="description"
                        id="textArea01"
                        readOnly={!isEdit ? 'readonly' : ''}
                        placeholder="Введите описание задачи..."
                        // defaultValue={foundTask?.description}
                        value={
                            !isEdit
                                ? foundTask?.description
                                : editTask.description
                        }
                        onChange={onChange}
                    />
                </S.FormBrowse.form_block>
            </S.FormBrowse.form>
        </>
    )
}

export default PopBrowseForm
