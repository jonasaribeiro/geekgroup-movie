import styled from 'styled-components';

export const StyledMovieDescription = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .title {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        h2 {
            font-size: 24px;
            color: #ffffff;
            margin-bottom: 0px;
            font-family: 'Roboto', sans-serif;
        }

        .saveButton {
            display: flex;
            align-items: center;

            gap: 10px;
            cursor: pointer;
            h2 {
                margin-bottom: 0px;
                color: #ffffff;
                font-size: 18px;
            }
        }
    }
    .posterDiv {
        width: 100%;
        background-color: black;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        .poster {
            align-items: center;
            width: 50%;
            object-fit: contain;
        }
    }

    .bottomPost {
        margin-bottom: 20px;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        align-items: center;
        .subinformationDiv {
            display: flex;
            width: 100%;
            justify-content: space-between;
            p {
                color: #ffffff;
                font-size: 16px;
                font-family: 'Inter', sans-serif;
            }
            margin-bottom: 10px;
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
            font-family: 'Inter', sans-serif;
        }
        button:hover {
            opacity: 0.8;
        }
    }

    .sinapseDiv {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;

        h2 {
            font-size: 24px;
            margin-bottom: 10px;
            font-family: 'Roboto', sans-serif;
        }
        p {
            font-family: 'Inter', sans-serif;
            width: 100%;
            height: max-content;
            text-align: center;
            color: #ffffff;
            line-height: 150%;
            font-size: 16px;
        }
    }

    @media (min-width: 768px) {
        .bottomPost {
            justify-content: space-between;
            flex-direction: row;
            .subinformationDiv {
                width: 50vw;
                max-width: 420px;
            }
        }
    }
`;
