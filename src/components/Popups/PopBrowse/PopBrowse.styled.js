import { Hover01, Hover03 } from '../../../Common.styled'
import styled from 'styled-components'
import { topicStyles } from '../../../lib/topic'
import { breakpoints } from '../../../lib/breakpoints'

export const PopBrowse = {
    wrapper: styled.div`
        /* display: none; */
        width: 100%;
        height: 100%;
        min-width: 375px;
        min-height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 7;

        @media screen and (max-width: ${breakpoints.lg}px) {
            top: 70px;
        }
    `,

    container: styled.div`
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.browsePopup.container};

        @media screen and (max-width: ${breakpoints.lg}px) {
            padding: 0;
            justify-content: flex-start;
        }
    `,

    block: styled.div`
        display: block;
        margin: 0 auto;
        background-color: ${props => props.theme.browsePopup.background};
        max-width: 630px;
        width: 100%;
        padding: 40px 30px 38px;
        border-radius: 10px;
        border: 0.7px solid ${props => props.theme.browsePopup.border};
        position: relative;

        @media screen and (max-width: ${breakpoints.lg}px) {
            border-radius: 0;
        }

        @media screen and (max-width: ${breakpoints.md}px) {
            padding: 20px 16px 32px;
        }
    `,

    content: styled.div`
        display: block;
        text-align: left;
    `,

    top_block: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
    `,

    title: styled.h3`
        color: ${props => props.theme.browsePopup.title};
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    `,

    topic_category: styled.div`
        display: block;
        width: auto;
        height: 30px;
        padding: 8px 20px;
        border-radius: 24px;
        margin-right: 7px;
        opacity: 1;
        background-color: ${({ $topicColor }) => topicStyles[$topicColor]};

        @media screen and (max-width: ${breakpoints.md}px) {
            display: none;
        }

        p {
            font-size: 14px;
            font-weight: 600;
            line-height: 14px;
            white-space: nowrap;
            color: ${$topicColor => topicStyles[$topicColor]};
        }
    `,

    status: styled.div`
        margin-bottom: 11px;
    `,

    status_subtitle: styled.p`
        margin-bottom: 14px;
    `,

    topic_statuses: styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
    `,

    topic_status: styled.div`
        border-radius: 24px;
        border: 0.7px solid rgba(148, 166, 190, 0.4);
        color: #94a6be;
        padding: 11px 14px 10px;
        margin-right: 7px;
        margin-bottom: 7px;

        ${props => (props.$hide ? topicStyles._hide : '')}
        ${props => (props.$current ? topicStyles._gray : '')}

        p {
            font-size: 14px;
            line-height: 1;
            letter-spacing: -0.14px;
        }
    `,

    wrap: styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        @media screen and (max-width: ${breakpoints.lg}px) {
            display: block;
        }
    `,

    down_topic: styled.div`
        display: none;
        margin-bottom: 20px;

        @media screen and (max-width: ${breakpoints.md}px) {
            display: block;
            margin-bottom: 20px;
        }
    `,

    down_topic_category: styled.div`
        display: inline-block;
        width: auto;
        height: 30px;
        padding: 8px 20px;
        border-radius: 24px;
        margin-right: 7px;
        opacity: 1;
        background-color: ${({ $topicColor }) => topicStyles[$topicColor]};

        p {
            font-size: 14px;
            font-weight: 600;
            line-height: 14px;
            white-space: nowrap;
            color: ${$topicColor => topicStyles[$topicColor]};
        }
    `,

    down_topic_subtitle: styled.p`
        margin-bottom: 14px;
        color: ${props => props.theme.browsePopup.title};
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
    `,
}

export const PopBrowseButtons = {
    btn_browse: styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;

        ${props => (props.$hide ? topicStyles._hide : '')}

        button {
            height: 30px;
            margin-bottom: 10px;
            padding: 0 14px;

            @media screen and (max-width: ${breakpoints.md}px) {
                width: 100%;
                height: 40px;
            }
        }
    `,

    btn_group: styled.div`
        @media screen and (max-width: ${breakpoints.md}px) {
            width: 100%;
        }

        button {
            margin-right: 8px;
            border-radius: 4px;
            border: 0.7px solid ${props => props.theme.browsePopup.button};
            outline: none;
            background: transparent;
            color: ${props => props.theme.browsePopup.button};

            a {
                color: ${props => props.theme.browsePopup.button};
            }

            ${Hover03}

            @media screen and (max-width: ${breakpoints.md}px) {
                margin-right: 0px;
            }
        }
    `,

    btn_edit_group: styled.div`
        @media screen and (max-width: ${breakpoints.md}px) {
            width: 100%;
        }

        button {
            margin-right: 8px;

            @media screen and (max-width: ${breakpoints.md}px) {
                margin-right: 0px;
            }
        }
    `,

    btn_save: styled.button`
        border-radius: 4px;
        background: #565eef;
        border: none;
        outline: none;
        color: #ffffff;

        a {
            color: #ffffff;
        }

        ${Hover01}
    `,

    btn_cancel: styled.button`
        border-radius: 4px;
        border: 0.7px solid ${props => props.theme.browsePopup.button};
        outline: none;
        background: transparent;
        color: ${props => props.theme.browsePopup.button};

        a {
            color: ${props => props.theme.browsePopup.button};
        }

        ${Hover03}
    `,

    btn_delete: styled.button`
        border-radius: 4px;
        border: 0.7px solid ${props => props.theme.browsePopup.button};
        outline: none;
        background: transparent;
        color: ${props => props.theme.browsePopup.button};

        a {
            color: ${props => props.theme.browsePopup.button};
        }

        ${Hover03}
    `,

    btn_close: styled.button`
        border-radius: 4px;
        background: #565eef;
        border: none;
        outline: none;
        color: #ffffff;

        a {
            color: #ffffff;
        }

        ${Hover01}
    `,
}

export const FormBrowse = {
    form: styled.form`
        max-width: 370px;
        width: 100%;
        display: block;
        margin-bottom: 20px;

        @media screen and (max-width: ${breakpoints.md}px) {
            max-width: 100%;
        }
    `,

    form_block: styled.div`
        display: flex;
        flex-direction: column;
    `,

    form_subtitle: styled.label`
        color: ${props => props.theme.browsePopup.title};
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
    `,

    form_textarea: styled.textarea`
        max-width: 370px;
        width: 100%;
        outline: none;
        padding: 14px;
        background: ${props => props.theme.browsePopup.form};
        border: 0.7px solid rgba(148, 166, 190, 0.4);
        border-radius: 8px;
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;
        margin-top: 14px;
        height: 200px;

        &::placeholder {
            font-weight: 400;
            font-size: 14px;
            line-height: 1px;
            color: #94a6be;
            letter-spacing: -0.14px;
        }

        @media screen and (max-width: ${breakpoints.md}px) {
            max-width: 100%;
            height: 37px;
        }
    `,
}
