import PopNewCardForm from './PopNewCardForm'
import Calendar from '../../Calendar/Calendar'
import { routePaths } from '../../../lib/routes'
import * as S from './PopNewCard.styled'
import { topicCategory } from '../../../lib/topic'

function PopNewCard() {
    return (
        <S.PopNewCard>
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>

                        <S.PopNewCardClose to={routePaths.MAIN}>
                            ✖
                        </S.PopNewCardClose>

                        <S.PopNewCardWrap>
                            <PopNewCardForm />
                            <Calendar />
                        </S.PopNewCardWrap>

                        <S.Categories>
                            <S.CategoriesSubtitle>
                                Категория
                            </S.CategoriesSubtitle>

                            <S.CategoriesThemes>
                                <S.CategoriesTheme
                                    $topicColor={topicCategory['Web Design']}
                                >
                                    <S.CategoriesThemeTitle>
                                        Web Design
                                    </S.CategoriesThemeTitle>
                                </S.CategoriesTheme>

                                <S.CategoriesTheme
                                    $topicColor={topicCategory['Research']}
                                >
                                    <S.CategoriesThemeTitle>
                                        Research
                                    </S.CategoriesThemeTitle>
                                </S.CategoriesTheme>

                                <S.CategoriesTheme
                                    $topicColor={topicCategory['Copywriting']}
                                >
                                    <S.CategoriesThemeTitle>
                                        Copywriting
                                    </S.CategoriesThemeTitle>
                                </S.CategoriesTheme>
                            </S.CategoriesThemes>
                        </S.Categories>

                        <S.FormNewCreateBtn>Создать задачу</S.FormNewCreateBtn>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    )
}

export default PopNewCard
