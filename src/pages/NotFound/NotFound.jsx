import * as S from './NotFound.styled'
import { routePaths } from '../../lib/routes'

const errorPageImg = import.meta.env.BASE_URL + '/images/404_error.jpg'

function NotFound() {
    return (
        <S.ErrorPage>
            <S.ErrorPageImg src={errorPageImg} />

            <S.ErrorPageBtn>
                <S.ErrorPageLink to={routePaths.MAIN}>
                    На главную
                </S.ErrorPageLink>
            </S.ErrorPageBtn>
        </S.ErrorPage>
    )
}

export default NotFound
