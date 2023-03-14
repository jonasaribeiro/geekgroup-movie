import styled from 'styled-components';

export const UlMovies = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    z-index: 0;
    width: 96%;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const LiMovies = styled.li`
    display: flex;
    flex-direction: column;
    padding: 16px 0 20px;
    position: relative;
    align-items: center;

    .blue-heart {
        position: absolute;
        top: 22px;
        right: 9px;
        opacity: 0.4;
        transition: 0.3s;
        cursor: pointer;

        :hover {
            opacity: 1;
            transition: 0.3s;
        }
    }
    button {
        background-image: linear-gradient(
            to right,
            rgb(190 46 0),
            rgb(255 52 0)
        );
        color: white;
        font-size: 20px;
        position: absolute;
        bottom: 0;
        margin: auto;
        padding: 5px 10px;
        border-radius: 10px;
    }
`;

export const PosterImage = styled.img`
    width: 100%;
    height: 430px;
`;
