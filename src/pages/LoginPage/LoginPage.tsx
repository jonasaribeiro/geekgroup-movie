import { useContext } from 'react';
import { Header } from '../../components/header/header';
import { UserContext } from '../../provider/UserContext';
import { LoginModal } from '../LandingPage/components/LoginModal';
import { PrincipalMovie } from './components/PrincipalMovie/PrincipalMovie';
import { TopMovies } from './components/TopMovies/TopMovies';
import { UlMovies } from './components/TopMovies/topmovies.styled';
import {
    DivContainer,
    LoginButton,
    MainCointainer,
    MoviesTitle,
} from './LoginPage.styled';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { ButtonLogout } from '../Profile/profile.styled';

export const LoginPage = () => {
    const { user, loginModal, closeModal,handleLogOff } = useContext(UserContext);

    return (
        <>
            <Header>
                {!user.accessToken ? (
                    <LoginButton type='button' onClick={() => closeModal()}>
                        Login
                    </LoginButton>
                ) : (
                    <>
                        <Link to='/profile'>Profile</Link>
                        <ButtonLogout onClick={()=>handleLogOff()}>Logoff</ButtonLogout>
                    </>
                )}
            </Header>
            <MainCointainer>
                {loginModal && <LoginModal />}
                <DivContainer>
                    <PrincipalMovie />
                    <MoviesTitle>Tendencias</MoviesTitle>
                    <UlMovies>
                        <TopMovies />
                        <TopMovies />
                        <TopMovies />
                    </UlMovies>
                </DivContainer>
            </MainCointainer>
        </>
    );
};
