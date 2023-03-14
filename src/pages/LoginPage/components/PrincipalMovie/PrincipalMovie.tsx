import { useContext } from 'react';
import { ContainerMovie, MovieImg } from './principalmovie.styled';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { MoviesContext } from '../../../../provider/MoviesContext';

export const PrincipalMovie = () => {
    const { carouselImage } = useContext(MoviesContext);

    return (
        <ContainerMovie>
            <Carousel>
                {carouselImage.map((element: any) => (
                    <Carousel.Item id={element.id}>
                        <MovieImg
                            src={`https://image.tmdb.org/t/p/original/${element.backdrop_path}`}
                            alt=''
                            onClick={() => saibaMaisClick(element.id)}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </ContainerMovie>
    );
};
