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

export const ProfilePage = () => {
    const { savedMovies, setSavedMovies } = useContext(UserContext);

    return (
        <>
            <Container1>
                <Main>
                    <ProfileInfo />
                    <MovielistTitle>Filmes Salvos: 15</MovielistTitle>
                    <MovieList>
                        {savedMovies.length > 0 ? (
                            savedMovies.map((e) => {
                                return <MovieLI movieInfo={e} />;
                            })
                        ) : (
                            <h3>
                                Você não possui nenhum filme salvo em sua lista
                            </h3>
                        )}
                    </MovieList>
                </Main>
            </Container1>
            <Header>
                <ButtonLogout type='button'>Logout</ButtonLogout>
            </Header>
        </>
    );
};
