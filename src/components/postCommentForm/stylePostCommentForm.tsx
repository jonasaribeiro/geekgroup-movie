import styled from 'styled-components';

export const StyledPostCommentForm = styled.form`
    h3 {
        text-align: left;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 15px;
    }
    .postCommentDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        textarea {
            width: 100%;
            height: 100px;
            max-height: 100px;
            outline: none;
            background-color: #954522;
            color: #ffffff;
            border-radius: 30px;
            padding: 20px 35px;
            margin-bottom: 20px;
        }
        textarea::placeholder {
            color: #ffffff;
        }
        button {
            cursor: pointer;
            width: 98px;
            height: 48px;
            border-radius: 70px;
            color: #ffffff;
            background: linear-gradient(
                180deg,
                #be6b00 0%,
                rgba(255, 52, 0, 0.39) 100%
            );
            border-radius: 70px;
            border: none;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            transition: 0.4s ease;
        }
        button:hover {
            opacity: 0.8;
        }
    }
    .erroMessage {
        color: #d09090;
        margin-left: 20px;
    }
`;
