import styled from 'styled-components';

export const StyledMoviePage = styled.div`
    color: #ffffff;
    main {
        background-color: #000000;
        width: 100%;
        height: 100%;
        padding: 0px 15px;
        .container {
            padding: 15px;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                180deg,
                rgba(190, 107, 0, 0.59) -6.47%,
                rgba(255, 52, 0, 0.4602) 93.53%
            );
            margin: 0 auto;
            max-width: 813px;
            form {
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
                        outline: none;
                        background-color: #ffffff;
                        color: #000000;
                        border-radius: 30px;
                        padding: 20px 35px;
                        margin-bottom: 20px;
                    }
                    button {
                        cursor: pointer;
                        width: 98px;
                        height: 48px;
                        border-radius: 70px;
                        color: #ffffff;
                        background: linear-gradient(
                            180deg,
                            #131210 0%,
                            rgba(255, 52, 0, 0.39) 100%
                        );
                        border: none;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    }
                }
            }
        }
    }
`;
