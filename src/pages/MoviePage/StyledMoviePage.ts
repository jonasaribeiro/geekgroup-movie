import styled from 'styled-components';

export const StyledMoviePage = styled.div`
    color: #ffffff;

    header {
        .profileDiv {
            display: flex;
            align-items: center;
            gap: 30px;
            div {
                display: flex;
                align-items: center;
                gap: 10px;
                img {
                    width: 40px;
                    border-radius: 50%;
                    transition: 0.4s;
                }
                img:hover{
                    position: relative;
                    scale: 1.2;
                }
                a {
                    color: #ffffff;
                    font-size: 18px;
                }
            }
            a {
                color: #ffffff;
                font-size: 18px;
            }
            a:hover{
                text-decoration: underline;
            }
        }
    }
    main {
        margin-top: 89px;
        background-color: #000000;
        width: 100%;
        height: 100%;
        padding: 0px 15px;
        .container {
            padding: 50px 15px;
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
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        form {
            .postCommentDiv {
                align-items: center;
                flex-direction: row !important;
                gap: 20px;
                height: 120px;
                textarea {
                    margin-bottom: 0px !important;
                }
            }
        }
    }
`;
