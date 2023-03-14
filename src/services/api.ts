import axios from 'axios';
import { iUser } from '../provider/UserContext';
import { iMovie } from '../provider/MoviesContext';
import { toast } from 'react-toastify';

export const jsonApi = axios.create({
    baseURL: 'https://json-server-geek-group.onrender.com',
    timeout: 10000,
});

export const movieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 6000,
});

export const theMovieToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzYxMjYwZmZmNzAwZTUzNzk2Y2EyNDA5NDUzMTUxNyIsInN1YiI6IjY0MDI0NzA1Njk5ZmI3MDBlNmZlZjEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQSg-PL4PTikR_nIN8Qd-2eZCRgn0QyU5u2DztwJTkY';
