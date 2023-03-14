import { useContext } from 'react';
import { UserContext } from '../../../../provider/UserContext';
import { ContainerMovie, MovieImg } from './principalmovie.styled';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export const PrincipalMovie = () => {
    const { carouselImage } = useContext(UserContext);

    return (
        <ContainerMovie>
            <Carousel>
                {carouselImage.map((element: any) => (
                    <Carousel.Item id={element.id}>
                        <MovieImg
                       
                            src={`https://image.tmdb.org/t/p/original/${element.backdrop_path}`}
                            alt=''
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </ContainerMovie>
    );
};
