import styled from 'styled-components';

export const StyledCommentListCard = styled.li`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    .top_comment {
        position: relative;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 20px;
        z-index: 0;
        img {
            width: 40px;
            height: 40px;
            background-color: green;
            border-radius: 50%;
        }
        h2 {
            color: #ffffff;
            font-size: 18px;
            font-family: 'Roboto', sans-serif;
        }
        .likeButton {
            position: absolute;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            p {
                font-family: 'Inter', sans-serif;
                color: #ffffff;
                font-size: 20px;
                text-align: center;
            }
            button {
                font-family: 'Inter', sans-serif;
                background-color: transparent;
                img {
                    background-color: transparent;
                    height: 30px;
                }
                img:active {
                    position: relative;
                    scale: 1.2;
                }
            }
        }
    }

    .bottom_comment {
        margin-left: 60px;
        display: flex;
        flex-direction: row;
        align-items: top;
        gap: 15px;
        padding-right: 40px;
        p {
            font-family: 'Inter', sans-serif;
            width: 100%;
            height: max-content;
            text-align: justify;
            font-size: 16px;
            color: #ffffff;
            line-height: 150%;
        }
    }
`;
