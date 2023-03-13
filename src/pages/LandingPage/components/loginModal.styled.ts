import styled from 'styled-components';

export const DivCointainerModal = styled.div`
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    height: 336px;
    width: 300px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgb(255 52 0);
    position: fixed;
    top: 143px;
    right: 5px;
    z-index: 9;
`;

export const HeaderModal = styled.header`
    background-image: linear-gradient(rgb(190 107 0), rgb(255 52 0));
    width: 100%;
    height: 15%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    

    h3 {
        font-size: 15px;
    }
`;

export const FormModal = styled.form`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 9px;
    margin-top: 13px;

    p {
        color: white;
    }
    span {
        color: #be6b00;
    }

    Input {
        margin-top: 20px;
        padding: 5px 10px;
        width: 267px;
        height: 31px;
        border-radius: 18px;
        border-color: white;
    }

    button {
        width: 200px;
        height: 37px;
        border-radius: 30px;
        background-color: #be6b00;
        color: white;
    }
`;
