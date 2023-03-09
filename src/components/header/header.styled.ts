import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: none;
    figure {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @media (min-width: 600px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 15px 20px 10px;
        align-items: center;
        background-image: linear-gradient(
            to right,
            rgb(190, 107, 0),
            rgb(255 52 0)
        );
        box-shadow: 0 0 30px black;
    }
`;

export const Img = styled.img`
    height: 100px;
`;
