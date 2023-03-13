import { StyledLink, StyledRegisterPage } from './style';
import { Header } from '../../components/header/header';
import { Img } from '../../components/header/header.styled';
import logo from '../../assets/img/logo.svg';
import { RegisterForm } from '../../components/form/RegisterForm/register';
import { RiHome4Line } from 'react-icons/ri';

export const RegisterPage = () => {
    return (
        <StyledRegisterPage>
            <figure>
                <Img src={logo} alt='geek group' />
            </figure>

            <Header>
                <StyledLink to={'/'}>
                    <RiHome4Line />
                    <p>Home</p>
                </StyledLink>
            </Header>
            <RegisterForm />
        </StyledRegisterPage>
    );
};
