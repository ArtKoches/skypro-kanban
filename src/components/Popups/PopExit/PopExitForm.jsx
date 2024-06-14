import * as S from './PopExit.styled'
import { Button } from '/src/Styles/Common.styled.js'

function PopExitForm() {
    return (
        <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
                <Button $exit id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>{' '}
                </Button>

                <Button id="exitNo">
                    <a href="main.html">Нет, остаться</a>{' '}
                </Button>
            </S.PopExitFormGroup>
        </S.PopExitForm>
    )
}

export default PopExitForm
