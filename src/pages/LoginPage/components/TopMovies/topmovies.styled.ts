import styled from 'styled-components';

export const UlMovies = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    z-index: 0;
    width: 709px;
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
    width: 166px;
    height: 375px;
    border-radius: 24px;
`;
