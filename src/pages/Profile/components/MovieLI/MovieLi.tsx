import { Button1, Button2, ImgPoster, StyledLi } from './MovieLi.styled';
import { useNavigate } from 'react-router-dom';
import {
    handleRemoveSavedMovie,
    movieApi,
    theMovieToken,
} from '../../../../services/api';
import { UserContext, iMovie } from '../../../../provider/UserContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

export const MovieLI = ({ movieInfo }: { movieInfo: iMovie }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const handlePoster = async () => {
        return await movieApi
            .get(
                `/movie/${movieInfo.id}?api_key=${theMovieToken}&language=pt-BR`
            )
            .then((response) => response.data.poster_path)
            .catch((err) => toast.error(`Ocorreu um erro: ${err}`));
    };

    const handleClickRemove = () => {
        handleRemoveSavedMovie(movieInfo, user);
    };
    const handleClickMore = () => {
        navigate(`/movieinfo/${movieInfo.movieId}`);
    };

    return (
        <StyledLi>
            <Button1 onClick={handleClickRemove} type='button'>
                Remover
            </Button1>
            <ImgPoster
                src={`https://image.tmdb.org/t/p/original/${handlePoster()}`}
            />
            <Button2 onClick={handleClickMore} type='button'>
                Saiba Mais
            </Button2>
        </StyledLi>
    );
};
