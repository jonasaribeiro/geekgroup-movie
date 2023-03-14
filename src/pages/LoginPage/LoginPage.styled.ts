import styled from 'styled-components';

export const LoginButton = styled.button`
    display: flex;
    align-items: center;
    gap: 18px;
    width: 133px;
    padding: 8px 18px;
    font-size: 16px;
    color: white;
    background-color: #414246;
    border-radius: 8px;
    transition: 0.3s;

    :hover {
        background-color: #64656b;
        transition: 0.3s;
    }

    p {
        margin: 0;
    }
`;

export const ProfileButton = styled.button`
    padding: 8px 18px;
    font-size: 16px;
    color: white;
    background-color: #414246;
    border-radius: 8px;
    margin-right: 30px;
    width: 80px;

    a {
        color: white;
        text-decoration: none;
    }
`;

export const LogOffButton = styled.button`
    padding: 8px 18px;
    font-size: 16px;
    color: white;
    background-color: #414246;
    border-radius: 8px;
    width: 80px;
`;

export const MainCointainer = styled.div`
    padding-top: 20px;
    width: 100vw;
    min-height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const DivContainer = styled.main`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 30px;
    width: 100%;
    max-width: 800px;
    background-image: linear-gradient(rgb(190 107 0), rgb(255 52 0));
    min-height: 80vh;
`;

export const MoviesTitle = styled.h1`
    margin-top: 30px;
    font-size: 24px;
    font-weight: 800;
    color: white;
    text-align: center;
`;

export const DivButtons = styled.div`
    visibility: hidden;

    @media (max-width: 599px) {
        visibility: visible;
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-bottom: 80px;
    }
`;
