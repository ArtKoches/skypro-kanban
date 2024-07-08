import * as S from './NotFound.styled'
import { routePaths } from '../../lib/routes'

function NotFound() {
    return (
        <S.ErrorPage>
            <S.ErrorPageImg src="/images/404_error.jpg" />

            <S.ErrorPageBtn>
                <S.ErrorPageLink to={routePaths.MAIN}>
                    На главную
                </S.ErrorPageLink>
            </S.ErrorPageBtn>
        </S.ErrorPage>
    )
}

export default NotFound
