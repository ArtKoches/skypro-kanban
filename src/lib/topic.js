import { css } from 'styled-components'

export const topicStyles = {
    _orange: css`
        ${props => props.theme.topic.webDesign.background};
        color: ${props => props.theme.topic.webDesign.color};
    `,
    _green: css`
        ${props => props.theme.topic.research.background};
        color: ${props => props.theme.topic.research.color};
    `,
    _purple: css`
        ${props => props.theme.topic.copywriting.background};
        color: ${props => props.theme.topic.copywriting.color};
    `,
    _gray: css`
        background: #94a6be;
        color: #ffffff;
    `,

    _active_category: css`
        opacity: 1 !important;
    `,
    _hide: css`
        display: none;
    `,
}

export const topicCategory = {
    'Web Design': '_orange',
    Research: '_green',
    Copywriting: '_purple',
}

export const color = {
    orange: topicCategory['Web Design'],
    green: topicCategory['Research'],
    purple: topicCategory['Copywriting'],
}
