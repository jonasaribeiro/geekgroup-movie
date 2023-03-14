import { useContext } from 'react';
import { Header } from '../../components/header/header';
import { UserContext } from '../../provider/UserContext';
import { LoginModal } from '../LandingPage/components/LoginModal';
import { PrincipalMovie } from './components/PrincipalMovie/PrincipalMovie';
import { TopMovies } from './components/TopMovies/TopMovies';
import { UlMovies } from './components/TopMovies/topmovies.styled';
import {
    DivButtons,
    DivContainer,
    LoginButton,
    LogOffButton,
    MainCointainer,
    MoviesTitle,
    ProfileButton,
} from './LoginPage.styled';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import  logo  from '../../assets/img/logo.svg'

export const LoginPage = () => {
    const { user, loginModal, closeModal, handleLogOff } = useContext(UserContext);
    console.log(user);

    return (
        <>
            <MainCointainer>
            <Header>
                {!user.accessToken ? (
                    <LoginButton type='button' onClick={() => closeModal()}>
                        Login
                    </LoginButton>
                ) : (
                    <>
                        <ProfileButton><Link to='/profile'>Profile</Link></ProfileButton>
                        <LogOffButton onClick={() => handleLogOff()}>Logoff</LogOffButton>
                    </>
                )}
            </Header>
            <figure>
                <img src={logo} alt="" />
            </figure>
            <DivButtons>
            {!user.accessToken ? (
                    <LoginButton type='button' onClick={() => closeModal()}>
                        Login
                    </LoginButton>
                ) : (
                    <>
                        <ProfileButton><Link to='/profile'>Profile</Link></ProfileButton>
                        <LogOffButton onClick={() => handleLogOff()}>Logoff</LogOffButton>
                    </>)}
            </DivButtons>
                {loginModal && <LoginModal />}
                <DivContainer>
                    <PrincipalMovie />
                    <MoviesTitle>Tendencias</MoviesTitle>
                    <UlMovies>
                        <TopMovies />
                    </UlMovies>
                </DivContainer>
            </MainCointainer>
        </>
    );
};
