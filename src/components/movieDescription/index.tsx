import { StyledMovieDescription } from './styledMovieDescription';
import blueHeart from '../../assets/img/blueHeart.svg';
import { useContext, useEffect, useState } from 'react';
import { handleSaveMovie, movieApi } from '../../services/api';
import { UserContext } from '../../provider/UserContext';
import { useParams } from 'react-router-dom';

interface imovieId {
    movieId: number;
}

interface imovieDescription {
    title: string;
    runtime: number;
    overview: string;
    release: string;
    poster: string;
}

function minuteToHour(minutes: number) {
    const hour = (minutes / 60).toFixed(0);
    const minute = minutes % 60;
    return `${hour}h ${minute}m`;
}
function returnImg(image: string) {
    return `https://image.tmdb.org/3/t/p/w500${image}`;
}

export const MovieDescription = ({ movieId }: imovieId) => {
    const { user } = useContext(UserContext);

    const [movieDescription, setMovieDescription] = useState<imovieDescription>(
        {} as imovieDescription
    );

    useEffect(() => {
        const getMovieDescription = async () => {
            try {
                const request = await movieApi.get(
                    `movie/${movieId}?language=pt-br`,
                    {
                        headers: {
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzYxMjYwZmZmNzAwZTUzNzk2Y2EyNDA5NDUzMTUxNyIsInN1YiI6IjY0MDI0NzA1Njk5ZmI3MDBlNmZlZjEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQSg-PL4PTikR_nIN8Qd-2eZCRgn0QyU5u2DztwJTkY`,
                        },
                    }
                );
                const { title, runtime, overview, release_date, poster_path } =
                    request.data;
                setMovieDescription({
                    title: title,
                    runtime: runtime,
                    overview: overview,
                    release: release_date.split('-')[0],
                    poster: poster_path,
                });
            } catch (error) {
                console.log(error);
            }
        };
        getMovieDescription();
    }, []);

    return (
        <StyledMovieDescription>
            <div className='title'>
                <h2>{movieDescription.title}</h2>
                <div
                    onClick={() => handleSaveMovie(movieId, user)}
                    className='saveButton'
                >
                    <h2>Salvar</h2>
                    <img src={blueHeart} alt='salvar' />
                </div>
            </div>
            <div className='posterDiv'>
                <img
                    className='poster'
                    src={returnImg(movieDescription.poster)}
                    alt={movieDescription.title}
                />
            </div>

            <div className='bottomPost'>
                <div className='subinformationDiv'>
                    <p>Duração: {minuteToHour(movieDescription.runtime)}</p>
                    <p>Ano: {movieDescription.release}</p>
                </div>

                <button>Ver Trailer</button>
            </div>

            <div className='sinapseDiv'>
                <h2 className='Sinapse'>Sinopse</h2>
                <p>{movieDescription.overview}</p>
            </div>
        </StyledMovieDescription>
    );
};
