import styled from 'styled-components';

export const StyledRegisterPage = styled.div`
    min-height: 100vh;

    background-color: #000000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    figure {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .home_btn {
        height: 30px;
        width: 50px;

        border: none;
        border-radius: 8px;

        background-color: #414246;
        color: #f8f9fa;

        font: 14px 'Inter', sans-serif;
    }

    form {
        background-image: linear-gradient(rgb(190, 107, 0), rgb(255 52 0));

        min-height: 410px;

        padding: 10px;
        margin-top: 50px;
        margin-inline: 10px;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
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
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            div {
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

                    background-color: #343b41;
                    color: #f8f9fa;
                }
            }
        }

        button {
            margin: 10px 10px;
            border: none;
            border-radius: 4px;

            height: 30px;

            background-color: #343b41;

            color: #f8f9fa;

            font: 14px 'Inter', sans-serif;
        }
    }
`;
