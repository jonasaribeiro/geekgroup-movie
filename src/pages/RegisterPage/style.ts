import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledRegisterPage = styled.div`
    min-height: 100vh;

    /* background-color: rgb(0, 0, 0, 0.5); */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: url('src/assets/img/imagemFundo.png'),
        url('src/assets/img/Rectangle.png');
    background-attachment: fixed;
    background-blend-mode: darken;

    figure {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        background-image: linear-gradient(rgb(190, 107, 0), rgb(255 52 0));
        /* background: linear-gradient(140deg, #000000c7, #00000029); */

        min-height: 410px;

        padding: 10px;
        margin-top: 50px;
        margin-inline: 10px;
        border-radius: 4px;

        display: flex;
        flex-direction: column;

        /* box-shadow: 0 0 30px #ff5722a8; */
        box-shadow: 0 0 30px #000000c7;

        div {
            h2 {
                font-family: 'Roboto', sans-serif;
            }
            p {
                font-family: 'Inter', sans-serif;
            }
        }
        @media (min-width: 600px) {
            width: 600px;
        }
        .form_box--title {
            color: #f8f9fa;
            text-align: center;
        }

        .form_box--inputs {
            position: relative;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            div {
                position: relative;
                display: flex;
                flex-direction: column;
                gap: 10px;

                label {
                    color: #f8f9fa;
                    font-family: 'Inter', sans-serif;
                    font-size: 14px;
                }

                input {
                    height: 30px;

                    padding: 5px;
                    border-radius: 4px;

                    outline: none;

                    background-color: #343b41;
                    color: #f8f9fa;

                    transition: 0.3s;

                    :focus {
                        transition: 0.3s;
                        /* box-shadow: 0px 0px 10px #ff5722a8; */
                        box-shadow: 0px 0px 10px #000000c7;
                    }
                }
            }
            .user_img--name {
                position: absolute;
                left: 253px;
                top: 44px;

                @media (min-width: 600px) {
                    left: 543px;
                }
            }
            .mail_img {
                position: absolute;
                top: 123px;
                left: 253px;

                @media (min-width: 600px) {
                    left: 543px;
                }
            }

            .lock_img--password {
                position: absolute;
                left: 253px;
                top: 204px;

                cursor: pointer;

                @media (min-width: 600px) {
                    left: 543px;
                }
            }

            .lock_img--confirmPassword {
                position: absolute;
                top: 285px;
                left: 253px;

                cursor: pointer;

                @media (min-width: 600px) {
                    left: 543px;
                }
            }
            .link_img--urlImg {
                position: absolute;
                left: 253px;
                top: 366px;

                @media (min-width: 600px) {
                    left: 543px;
                }
            }
        }
        button {
            margin: 10px 10px;
            border: none;
            border-radius: 4px;

            height: 30px;
            min-width: 80px;

            background-color: #343b41;

            color: #f8f9fa;

            font: 14px 'Inter', sans-serif;

            transition: 0.3s;

            :hover {
                background-color: #64656b;
                transition: 0.3s;
            }
        }
    }
`;

export const StyledLink = styled(Link)`
    height: 30px;
    width: 106px;

    border: none;
    border-radius: 8px;
    padding: 5px;

    background-color: #414246;
    color: #f8f9fa;

    display: flex;
    padding: 5px;
    align-items: center;

    font: 14px 'Inter', sans-serif;
    text-decoration: none;
    transition: 0.4s;

    :hover {
        background-color: #64656b;
        transition: 0.4s;
        color: #f8f9fa;
    }

    p {
        margin-left: 12px;
        margin: 0 auto;
    }
`;
