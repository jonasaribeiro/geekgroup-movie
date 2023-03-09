import styled from 'styled-components';

export const StyledCommentListCard = styled.li`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    .top_comment {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 20px;
        img {
            width: 40px;
            height: 40px;
            background-color: green;
            border-radius: 50%;
        }
        h2 {
            color: #ffffff;
            font-size: 18px;
        }
    }

    .bottom_comment {
        display: flex;
        flex-direction: row;
        align-items: top;
        gap: 15px;
        p {
            width: 100%;
            height: max-content;
            text-align: justify;
            font-size: 16px;
            color: #ffffff;
            line-height: 150%;
        }
        .likeButton {
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            p {
                color: #ffffff;
                font-size: 20px;
                text-align: center;
            }
            button {
                background-color: transparent;
                img {
                    background-color: transparent;
                    height: 30px;
                }
            }
        }
    }
`;
