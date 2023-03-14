import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { jsonApi, movieApi } from '../services/api';
import { UserContext, iUser } from './UserContext';

export interface IPosterMovie {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: Number;
    id?: Number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: Number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: Number;
    vote_count?: Number;
}

export interface iMovie {
    movieId: Number;
    userId: Number;
    id?: Number;
}

interface iMoviesContext {
    saibaMaisClick: (movieId: Number) => void;
    savedMovies: iMovie[];
    setSavedMovies: React.Dispatch<React.SetStateAction<iMovie[]>>;
    moviesPoster: IPosterMovie[];
    carouselImage: IPosterMovie[];
    handleSaveMovie: (movieId: number, user: iUser) => Promise<void>;
    handleRemoveSavedMovie: (movieInfo: iMovie, user: iUser) => Promise<void>;
}

export const MoviesContext = createContext({} as iMoviesContext);

export const MoviesProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const [savedMovies, setSavedMovies] = useState([] as iMovie[]);
    const [moviesPoster, setMoviesPosters] = useState<IPosterMovie[]>([]);
    const [carouselImage, setCarouselImage] = useState<IPosterMovie[]>([]);
    const { user } = useContext(UserContext);

    function saibaMaisClick(movieId: Number) {
        if (user.accessToken !== '') {
            navigate(`/movieinfo/${movieId}`);
        } else {
            navigate(`/landingPage`);
        }
    }

    const handleSaveMovie = async (movieId: number, user: iUser) => {
        console.log(movieId);
        if (savedMovies.filter((e) => e.movieId === movieId).length === 0) {
            const newSavedMovie = await jsonApi
                .post(
                    '/savedMovies',
                    {
                        movieId: movieId,
                        userId: user.user.id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`,
                        },
                    }
                )
                .then((data) => {
                    toast.success('Filme salvo com sucesso');
                    return data.data;
                })
                .catch((err) =>
                    toast.error(
                        `Ocorreu um erro ao tentar salvar o filme: ${err}`
                    )
                );
            console.log(newSavedMovie, savedMovies);
            setSavedMovies([...savedMovies, newSavedMovie]);
        } else {
            toast.error('Filme já salvo');
        }
    };

    const handleRemoveSavedMovie = async (movieInfo: iMovie, user: iUser) => {
        jsonApi
            .delete(`/savedMovies/${movieInfo.id}`, {
                headers: { Authorization: `Bearer ${user.accessToken}` },
            })
            .then((data) => toast.success('Removido com sucesso!'))
            .catch((err) => toast.error(`Ocorreu algum erro: ${err}`));
        setSavedMovies(savedMovies.filter((e) => e.id !== movieInfo.id));
    };

    useEffect(() => {
        const getSavedMovies = () => {
            jsonApi
                .get(`/savedMovies?userId=${user.user.id}`, {
                    headers: { Authorization: `Bearer ${user.accessToken}` },
                })
                .then((data) => setSavedMovies(data.data))
                .catch((err) =>
                    toast.error(
                        `Ocorreu um erro ao tentar recuperar seus filmes salvos: ${err}`
                    )
                );
        };
        if (user.accessToken) {
            getSavedMovies();
        }
    }, [user]);

    useEffect(() => {
        const loadingPoster = async () => {
            try {
                const response = await movieApi.get(
                    '/movie/top_rated?api_key=e00895bb778a01db49aec7a6456aea75&language=en-US&page=1'
                );
                setMoviesPosters(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        loadingPoster();
    }, []);

    useEffect(() => {
        const loadingImageCarousel = async () => {
            try {
                const response = await movieApi.get(
                    '/trending/all/day?api_key=e00895bb778a01db49aec7a6456aea75'
                );
                setCarouselImage(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        loadingImageCarousel();
    }, []);

    return (
        <MoviesContext.Provider
            value={{
                saibaMaisClick,
                savedMovies,
                setSavedMovies,
                moviesPoster,
                carouselImage,
                handleSaveMovie,
                handleRemoveSavedMovie,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};
