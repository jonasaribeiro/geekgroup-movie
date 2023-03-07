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
            h2 {
                color: #ffffff;
                font-size: 16px;
            }
        }
    }
    .poster {
        width: 100%;
        height: 172px;
        background-color: red;
        margin-bottom: 15px;
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
                #131210 0%,
                rgba(255, 52, 0, 0.39) 100%
            );
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
`;
