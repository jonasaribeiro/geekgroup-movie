import { Button1, Button2, ImgPoster, StyledLi } from './MovieLi.styled';
import { useNavigate } from 'react-router-dom';
import {
    handleRemoveSavedMovie,
    movieApi,
    theMovieToken,
} from '../../../../services/api';
import { UserContext, iMovie } from '../../../../provider/UserContext';
import { useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MoviesContext } from '../../../../provider/MoviesContext';

export const MovieLI = ({ movieInfo }: { movieInfo: iMovie }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { saibaMaisClick, savedMovies, setSavedMovies } =
        useContext(MoviesContext);
    const [poster, setPoster] = useState('');

    useEffect(() => {
        const handlePoster = async () => {
            let temp = await movieApi
                .get(
                    `/movie/${movieInfo.movieId}?api_key=c9b2065569ad44bfd816636695333878&language=pt-BR`
                )
                .then((response) => response.data.poster_path)
                .catch((err) => toast.error(`Ocorreu um erro: ${err}`));
            setPoster(temp);
        };
        handlePoster();
    }, []);

    console.log(poster);

    const handleClickRemove = () => {
        handleRemoveSavedMovie(movieInfo, user);
        const newSavedMovies = savedMovies.filter(
            (e) => e.movieId !== movieInfo.movieId
        );
        setSavedMovies(newSavedMovies);
    };
    const handleClickMore = () => {
        saibaMaisClick(movieInfo.movieId);
    };

    return poster ? (
        <StyledLi>
            <Button1 onClick={handleClickRemove} type='button'>
                Remover
            </Button1>
            <ImgPoster src={`https://image.tmdb.org/t/p/original/${poster}`} />
            <Button2 onClick={handleClickMore} type='button'>
                Saiba Mais
            </Button2>
        </StyledLi>
    ) : (
        <></>
    );
};
