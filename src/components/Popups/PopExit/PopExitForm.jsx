import { Link } from 'react-router-dom'
import * as S from './PopExit.styled'
import { Button } from '../../../styles/Common.styled'
import { routePaths } from '../../../lib/routes'

function PopExitForm({ signOut }) {
    return (
        <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
                <Button onClick={signOut} $exit id="exitYes">
                    Да, выйти
                    {/* <a href="modal/signin.html">Да, выйти</a>{' '} */}
                </Button>

                <Button id="exitNo">
                    <Link to={routePaths.MAIN}>
                        Нет, остаться
                        {/* <a href="main.html">Нет, остаться</a>{' '} */}
                    </Link>
                </Button>
            </S.PopExitFormGroup>
        </S.PopExitForm>
    )
}

export default PopExitForm
