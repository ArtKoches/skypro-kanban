import { Button } from '../../Styles/Common.styled'
import { routePaths } from '../../lib/routes'
import * as S from './NotFound.styled'

function NotFound() {
    return (
        <S.ErrorPage>
            <S.ErrorPageTitle>Страница не найдена</S.ErrorPageTitle>

            <S.ErrorPageImg src="/public/images/error_404.jpg" />

            <Button>
                <S.ErrorPageLink to={routePaths.MAIN}>
                    На главную
                </S.ErrorPageLink>
            </Button>
        </S.ErrorPage>
    )
}

export default NotFound
