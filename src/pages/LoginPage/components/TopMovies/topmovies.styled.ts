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
`;

export const PosterImage = styled.img`
    width: 166px;
    height: 375px;
`