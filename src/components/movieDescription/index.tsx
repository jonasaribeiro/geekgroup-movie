import { StyledMovieDescription } from './styledMovieDescription';
import blueHeart from '../../assets/img/blueHeart.svg';
import { useContext, useEffect, useState } from 'react';
import { handleSaveMovie, movieApi, theMovieToken } from '../../services/api';
import { UserContext } from '../../provider/UserContext';
import { TrailerModal } from '../TrailerModal';
import { DescriptionContext } from '../../provider/DescriptionContext';

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

export const MovieDescription = ({ movieId }: imovieId) => {
    const { minuteToHour, returnImg } = useContext(DescriptionContext);
    const { user } = useContext(UserContext);
    const [trailerLink, setTrailerLink] = useState<string | null>('');
    const [showTrailerModal, setShowTrailerModal] = useState(false);
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
                            Authorization: `Bearer ${theMovieToken}`,
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

        async function getMovieTrailer() {
            try {
                const request = await movieApi.get(
                    `/movie/${movieId}?append_to_response=videos`,
                    {
                        headers: {
                            Authorization: `Bearer ${theMovieToken}`,
                        },
                    }
                );
                console.log(request.data);
                if (request.data.videos.results[0].key) {
                    setTrailerLink(request.data.videos.results[0].key);
                } else {
                    setTrailerLink(null);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getMovieTrailer();
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
                {trailerLink && (
                    <button
                        onClick={() => setShowTrailerModal(!showTrailerModal)}
                    >
                        Ver Trailer
                    </button>
                )}
            </div>

            <div className='sinapseDiv'>
                <h2 className='Sinapse'>Sinopse</h2>
                <p>{movieDescription.overview}</p>
            </div>
            {showTrailerModal && (
                <TrailerModal
                    trailer={trailerLink}
                    setShowTrailerModal={setShowTrailerModal}
                />
            )}
        </StyledMovieDescription>
    );
};
