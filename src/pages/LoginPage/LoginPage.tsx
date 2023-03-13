import { useContext } from "react"
import { Header } from "../../components/header/header"
import { UserContext } from "../../provider/UserContext"
import { LoginModal } from "../LandingPage/components/LoginModal"
import { DivCointainerModal } from "../LandingPage/components/loginModal.styled"
import { PrincipalMovie } from "./components/PrincipalMovie/PrincipalMovie"
import { TopMovies } from "./components/TopMovies/TopMovies"
import { UlMovies } from "./components/TopMovies/topmovies.styled"
import { DivContainer, LoginButton, MainCointainer, MoviesTitle } from "./LoginPage.styled"


export const LoginPage = () => {
const { loginModal, closeModal } = useContext(UserContext)
    
return(
    <>
    <Header>
        <LoginButton type="button" onClick={() => closeModal()}>Login</LoginButton>
    </Header>
<MainCointainer>
{loginModal && <LoginModal/>}
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
)}