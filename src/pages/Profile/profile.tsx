import { Header } from '../../components/header/header';
import {
    Container2,
    Container1,
    Main,
    MovieList,
    MovielistTitle,
    ProfileImg,
    StyledText,
    ButtonLogout,
} from './profile.styled';
import { MovieLI } from './components/MovieLi';
import profileImg from '../../../.BaseTest/profileimg.svg';

export const ProfilePage = () => {
    return (
        <>
            <Container1>
                <Main>
                    <Container2>
                        <ProfileImg src={profileImg} alt='' />
                        <StyledText>Nome: Jucelinio biruleibe silve</StyledText>
                        <StyledText>
                            Email: jucelinoMatador@gmail.com
                        </StyledText>
                    </Container2>
                    <MovielistTitle>Filmes Salvos: 15</MovielistTitle>
                    <MovieList>
                        <MovieLI />
                        <MovieLI />
                        <MovieLI />
                        <MovieLI />
                        <MovieLI />
                        <MovieLI />
                    </MovieList>
                </Main>
            </Container1>
            <Header>
                <ButtonLogout type='button'>Logout</ButtonLogout>
            </Header>
        </>
    );
};
