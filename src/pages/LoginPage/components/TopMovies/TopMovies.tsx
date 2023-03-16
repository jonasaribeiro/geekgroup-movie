import { LiMovies, PosterImage } from './topmovies.styled';
import { useContext } from 'react';
import { UserContext } from '../../../../provider/UserContext';
import heart from '../../../../assets/img/blueHeart.svg';
import { handleSaveMovie } from '../../../../services/api';
import { MoviesContext } from '../../../../provider/MoviesContext';

export const TopMovies = () => {
    const { user } = useContext(UserContext);
    const { moviesPoster, saibaMaisClick, savedMovies, setSavedMovies } =
        useContext(MoviesContext);

    return (
        <>
            {moviesPoster.map((element: any) => (
                <LiMovies id={element.id}>
                    <>
                        {user && (
                            <div
                                data-tooltip='Salvar'
                                className='blue-heart'
                            >
                                <img
                                    src={heart}
                                    onClick={() => {
                                        handleSaveMovie(element.id, user);
                                        setSavedMovies([
                                            ...savedMovies,
                                            {
                                                movieId: element.id,
                                                userId: user.user.id,
                                            },
                                        ]);
                                    }}
                                />
                            </div>
                        )}
                        <PosterImage
                            src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
                            alt=''
                        />
                        {user && (
                            <button onClick={() => saibaMaisClick(element.id)}>
                                Saiba mais
                            </button>
                        )}
                    </>
                </LiMovies>
            ))}
        </>
    );
};
