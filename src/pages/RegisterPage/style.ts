import styled from 'styled-components';

export const StyledRegisterPage = styled.div`
    min-height: 100vh;

    background-color: #000000;

    figure {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        background-image: linear-gradient(rgb(190, 107, 0), rgb(255 52 0));

        min-height: 410px;

        padding: 10px;

        .form_box--title {
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

                input {
                    height: 30px;

                    padding: 5px;

                    background-color: #343b41;
                    color: #f8f9fa;
                }
            }
        }
    }
`;
