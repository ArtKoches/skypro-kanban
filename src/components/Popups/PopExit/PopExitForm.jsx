import { Link } from 'react-router-dom'
import * as S from './PopExit.styled'
import { Button } from '../../../Common.styled'
import { routePaths } from '../../../lib/routes'
import { useUserContext } from '../../../contexts/User/useUserContext'

function PopExitForm() {
    const { signOut } = useUserContext()

    return (
        <S.PopExitForm action="#">
            <S.PopExitFormGroup>
                <Button onClick={signOut} $exit>
                    Да, выйти
                </Button>

                <Button>
                    <Link to={routePaths.MAIN}>Нет, остаться</Link>
                </Button>
            </S.PopExitFormGroup>
        </S.PopExitForm>
    )
}

export default PopExitForm
