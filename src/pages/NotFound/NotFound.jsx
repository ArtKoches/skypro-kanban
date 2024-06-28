import { routePaths } from '../../lib/routes'
import { Button } from '../../styles/Common.styled'
import * as S from './NotFound.styled'

function NotFound() {
    return (
        <S.ErrorPage>
            <S.ErrorPageTitle>Страница не найдена</S.ErrorPageTitle>

            <S.ErrorPageImg src="/images/error_404.jpg" />

            <Button>
                <S.ErrorPageLink to={routePaths.MAIN}>
                    На главную
                </S.ErrorPageLink>
            </Button>
        </S.ErrorPage>
    )
}

export default NotFound
