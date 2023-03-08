import axios from 'axios';
import { iUser, iMovie } from '../provider/UserContext';
import { toast } from 'react-toastify';

export const jsonApi = axios.create({
    baseURL: 'https://json-server-geek-group.onrender.com',
    timeout: 10000,
});

export const movieApi = axios.create({
    baseURL: '',
    timeout: 6000,
});

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
