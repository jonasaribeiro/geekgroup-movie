import styled from 'styled-components';

export const Container1 = styled.div`
    padding-top: 110px;
    width: 100vw;
    min-height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Container3 = styled.div`
    display: flex;
    gap: 10px;
`;

export const Main = styled.main`
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

export const MovieList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
`;

export const MovielistTitle = styled.h3`
    margin-top: 30px;
    font-size: 24px;
    font-weight: 800;
    color: white;
    text-align: center;
`;

export const ButtonLogout = styled.button`
    padding: 8px 18px;
    font-size: 16px;
    color: white;
    background-color: #414246;
    border-radius: 8px;
`;
