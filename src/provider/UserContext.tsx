import { ReactNode, createContext, useEffect, useState } from 'react';
import { jsonApi } from '../services/api';
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

interface iUserContext {
    user: iUser;
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<iUser>>;
    UserRegister: (data: TRegisterFormData) => Promise<void>;
    loginModal: boolean;
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
    closeModal: () => void;
    userLogin: (data: ILoginFormValues) => Promise<void>;
    handleLogOff: () => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({} as iUser);
    const [loginModal, setLoginModal] = useState<false | true>(false);
    const [loading, setLoading] = useState(false);
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

    const UserRegister = async (data: TRegisterFormData): Promise<void> => {
        try {
            setLoading(true);
            await jsonApi.post('/register', data);
            toast.success('Parabéns, cadastro realizado!');
            navigate('/');
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
            navigate('/profile')
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error('Verifique os dados digitados.');
            }
        } finally {
            setLoading(false);
        }
    };

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
                UserRegister,
                userLogin,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
