import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    .modal {
        width: 700px;
        height: 400px;
        position: relative;
        animation: modalAnimation 0.4s ease-in-out;
        background-color: red;

        button {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 30px;
            color: orange;
            background-color: black;
            cursor: pointer;
        }
        iframe {
            width: 100%;
            height: 100%;
            max-width: 100%;
            border-radius: 20px;
            background-color: #ffe6cc;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15),
                0 0 4px rgba(0, 0, 0, 0.1);
        }
    }

    @keyframes modalAnimation {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            opacity: 0.5;
            transform: scale(1.1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
