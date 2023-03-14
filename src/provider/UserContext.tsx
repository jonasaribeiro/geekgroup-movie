import { ReactNode, createContext, useEffect, useState } from 'react';
import { jsonApi, movieApi } from '../services/api';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TRegisterFormData } from '../components/form/RegisterForm/register';
import { ILoginFormValues } from '../components/form/LoginForm/LoginForm';

export interface iUser {
    accessToken: string;
    user: {
        email: string;
        name: string;
        img: string;
        id: number;
    };
}

export interface iMovie {
    movieId: Number;
    userId: Number;
    id: Number;
}

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

interface iUserContext {
    user: iUser;
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<iUser>>;
    savedMovies: iMovie[];
    setSavedMovies: React.Dispatch<React.SetStateAction<iMovie[]>>;
    UserRegister: (data: TRegisterFormData) => Promise<void>;
    loginModal: boolean;
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: () => void;
    userLogin: (data: ILoginFormValues) => Promise<void>;
    moviesPoster: IPosterMovie[];
    carouselImage: IPosterMovie[];
    handleLogOff: () => void;
    saibaMaisClick:(movieId:number)=>void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState({} as iUser);
    const [savedMovies, setSavedMovies] = useState([] as iMovie[]);
    const [loading, setLoading] = useState(false);
    const [moviesPoster, setMoviesPosters] = useState<IPosterMovie[]>([]);
    const [carouselImage, setCarouselImage] = useState<IPosterMovie[]>([]);
    const [loginModal, setLoginModal] = useState<false | true>(false);
    const navigate = useNavigate();
    const closeModal = () => {
        setLoginModal(!loginModal);
    };

    const handleLogOff = () => {
        setUser({
            accessToken: '',
            user: { email: '', name: '', id: 0, img: '' },
        });
        localStorage.setItem('@GeekGroup', '');
        navigate('/');
        toast.success('Deslogado com sucesso!');
    };

    function saibaMaisClick(movieId:number){
        if(user.accessToken!==''){
            navigate(`/movieinfo/${movieId}`)
        }
        else{
            navigate(`/landingPage`)
        }
    }

    const UserRegister = async (data: TRegisterFormData): Promise<void> => {
        try {
            setLoading(true);
            await jsonApi.post('/register', data);
            toast.success('Parabéns, cadastro realizado!');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error);
                toast.error('Ops, algo deu errado!');
            }
        } finally {
            setLoading(false);
        }
    };

    const userLogin = async (data: ILoginFormValues) => {
        try {
            setLoading(true);
            const response = await jsonApi.post('/login', data);
            setUser(response.data);
            localStorage.setItem('@GeekGroup', JSON.stringify(response.data));
            toast.success('login realizado com sucesso!');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error('Verifique os dados digitados.');
            }
        } finally {
            setLoading(false);
        }
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
                    '3/movie/top_rated?api_key=e00895bb778a01db49aec7a6456aea75&language=en-US&page=1'
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

    useEffect(() => {
        const localStorageCheck = () => {
            const temp = localStorage.getItem('@GeekGroup');
            if (temp) {
                setUser(JSON.parse(temp));
            }
        };
        localStorageCheck();
    }, []);

    return (
        <UserContext.Provider
            value={{
                handleLogOff,
                user,
                setUser,
                loginModal,
                setLoginModal,
                closeModal,
                savedMovies,
                setSavedMovies,
                UserRegister,
                userLogin,
                moviesPoster,
                carouselImage,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
