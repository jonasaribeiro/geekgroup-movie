import { StyledRegisterPage } from './style';
import { Header } from '../../components/header/header';
import { Img } from '../../components/header/header.styled';
import logo from '../../assets/img/logo.svg';
import { RegisterForm } from '../../components/form/RegisterForm/register';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../provider/UserContext';

export const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <StyledRegisterPage>
            <figure>
                <Img src={logo} alt='geek group' />
            </figure>

            <Header>
                <button className='home_btn' onClick={() => navigate('/')}>
                    Home
                </button>
            </Header>
            <RegisterForm />
        </StyledRegisterPage>
    );
};
