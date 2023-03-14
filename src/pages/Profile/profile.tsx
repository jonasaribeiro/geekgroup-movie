import { Header } from '../../components/header/header';
import {
    Container1,
    Main,
    MovieList,
    MovielistTitle,
    ButtonLogout,
} from './profile.styled';
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo';
import { MovieLI } from './components/MovieLI/MovieLi';
import { useContext } from 'react';
import { UserContext } from '../../provider/UserContext';
import { Container3 } from './profile.styled';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../../provider/MoviesContext';

export const ProfilePage = () => {
    const { handleLogOff } = useContext(UserContext);
    const { savedMovies, setSavedMovies } = useContext(MoviesContext);

    return (
        <>
            <Container1>
                <Main>
                    <ProfileInfo />
                    <MovielistTitle>{`Filmes Salvos: ${savedMovies.length}`}</MovielistTitle>
                    <MovieList>
                        {savedMovies.length > 0 ? (
                            savedMovies.map((e) => <MovieLI movieInfo={e} />)
                        ) : (
                            <h3>
                                Você não possui nenhum filme salvo em sua lista
                            </h3>
                        )}
                    </MovieList>
                </Main>
            </Container1>
            <Header>
                <Container3>
                    <Link to='/'>
                        <ButtonLogout type='button'>Início</ButtonLogout>
                    </Link>
                    <ButtonLogout onClick={handleLogOff} type='button'>
                        Logout
                    </ButtonLogout>
                </Container3>
            </Header>
        </>
    );
};
