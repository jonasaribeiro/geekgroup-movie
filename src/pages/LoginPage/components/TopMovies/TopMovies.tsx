import { LiMovies, PosterImage } from './topmovies.styled';
import { useContext } from 'react';
import { UserContext } from '../../../../provider/UserContext';
import heart from '../../../../assets/img/blueHeart.svg';

export const TopMovies = () => {
    const { moviesPoster, user } = useContext(UserContext);

    return (
        <>
            {moviesPoster.map((element: any) => (
                <LiMovies id={element.id}>
                    <>
                        {user && <img className='blue-heart' src={heart} />}
                        <PosterImage
                            src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
                            alt=''
                        />
                        {user && <button>Saiba mais</button>}
                    </>
                </LiMovies>
            ))}
        </>
    );
};
