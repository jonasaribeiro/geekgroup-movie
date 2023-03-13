import axios from 'axios';
import { iUser, iMovie } from '../provider/UserContext';
import { toast } from 'react-toastify';

export const jsonApi = axios.create({
    baseURL: 'https://json-server-geek-group.onrender.com',
    timeout: 10000,
});

export const movieApi = axios.create({
<<<<<<< HEAD
    baseURL: 'https://api.themoviedb.org/',
=======
    baseURL: 'https://api.themoviedb.org/3',
>>>>>>> 444c139ee91b8482c8bf00d3cf6ca7bcebba0a4f
    timeout: 6000,
});

export const theMovieToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzYxMjYwZmZmNzAwZTUzNzk2Y2EyNDA5NDUzMTUxNyIsInN1YiI6IjY0MDI0NzA1Njk5ZmI3MDBlNmZlZjEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQSg-PL4PTikR_nIN8Qd-2eZCRgn0QyU5u2DztwJTkY';

export const handleSaveMovie = (movieId: number, user: iUser) => {
    jsonApi
        .post(
            '/savedMovies',
            {
                movieId: movieId,
                userId: user.user.id,
            },
            {
                headers: { Authorization: `Bearer ${user.accessToken}` },
            }
        )
        .then((data) => toast.success('Filme salvo com sucesso'))
        .catch((err) =>
            toast.error(`Ocorreu um erro ao tentar salvar o filme: ${err}`)
        );
};

export const handleRemoveSavedMovie = (movieInfo: iMovie, user: iUser) => {
    jsonApi
        .delete(`/savedMovies/${movieInfo.id}`, {
            headers: { Authorization: `Bearer ${user.accessToken}` },
        })
        .then((data) => toast.success('Removido com sucesso!'))
        .catch((err) => toast.error(`Ocorreu algum erro: ${err}`));
};
