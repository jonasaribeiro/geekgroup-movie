import styled from 'styled-components';

export const DivCointainerModal = styled.div`
    background-color: rgb(128, 128, 128);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    height: 384px;
    width: 300px;
    position: relative;
    left: 870px;

`

export const HeaderModal = styled.header`
    background-image: linear-gradient(rgb(190 107 0), rgb(255 52 0));
    width: 100%;
    height: 15%;
    text-align: center;
    color: white;
    
    h3{
        font-size: 15px;
    }

`

export const FormModal = styled.form`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 9px;
    margin-top: 13px;
    
    p{
        color: white;
    }
    span{
        color: #BE6B00;
    }

    Input {
        margin-top: 20px;
        width: 267px;
        height: 31px;
        border-radius: 18px;
        border-color: white;
    }

    button{
        width: 200px;
        height: 37px;
        border-radius: 30px;
        background-color: #BE6B00;
        color: white;
    }
`