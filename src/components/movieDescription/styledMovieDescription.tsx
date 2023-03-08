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
            font-size: 18px;
            color: #ffffff;
        }

        .saveButton {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            h2 {
                color: #ffffff;
                font-size: 16px;
            }
        }
    }
    .posterDiv {
        width: 100%;
        .poster {
            width: 100%;
            object-fit: contain;
            margin-bottom: 15px;
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
        }
        p {
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
