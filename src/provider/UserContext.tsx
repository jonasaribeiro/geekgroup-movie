import axios from 'axios';
import { ReactNode, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TRegisterFormData } from '../components/Form/RegisterForm/register';
import { jsonApi } from '../services/api';

interface iUser {
    name: string;
    email: string;
    img: string;
    id: string;
}

interface iMovie {
    title: string;
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

    return (
        <UserContext.Provider
            value={{ user, setUser, savedMovies, setSavedMovies, UserRegister }}
        >
            {children}
        </UserContext.Provider>
    );
};
