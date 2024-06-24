import { Button } from '../../Styles/Common.styled'
import * as S from './NotFound.styled'

function NotFound({ toggleAuth }) {
    return (
        <S.ErrorPage>
            <S.ErrorPageTitle>Страница не найдена</S.ErrorPageTitle>

            <S.ErrorPageImg src="/public/images/error_404.jpg" />

            <Button onClick={toggleAuth}>
                <S.ErrorPageLink>На главную</S.ErrorPageLink>
            </Button>
        </S.ErrorPage>
    )
}

export default NotFound
