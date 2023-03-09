import { ReactNode, createContext, useEffect, useState } from 'react';
import { jsonApi } from '../services/api';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TRegisterFormData } from '../components/form/RegisterForm/register';

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

interface iUserContext {
    user: iUser;
    setUser: React.Dispatch<React.SetStateAction<iUser>>;
    savedMovies: iMovie[];
    setSavedMovies: React.Dispatch<React.SetStateAction<iMovie[]>>;
    UserRegister: (data: TRegisterFormData) => Promise<void>;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState({} as iUser);
    const [savedMovies, setSavedMovies] = useState({} as iMovie[]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const UserRegister = async (data: TRegisterFormData): Promise<void> => {
        try {
            setLoading(true);
            await jsonApi.post('/register', data);
            toast.success('Parabéns, cadastro realizado!');
            // navigate('/');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error('Ops, algo deu errado!');
            }
        } finally {
            setLoading(true);
        }
    };

    useEffect(() => {
        const getUser = () => {};
        getUser();
    }, []);

    useEffect(() => {
        const getSavedMovies = () => {
            jsonApi
                .get('/savedMovies', {
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

    return (
        <UserContext.Provider
            value={{ user, setUser, savedMovies, setSavedMovies, UserRegister }}
        >
            {children}
        </UserContext.Provider>
    );
};
