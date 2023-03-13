import { redirect } from "react-router-dom"
import { Header } from "../../components/header/header"

import { AcessButton, ButtonRegister, DivContainer, DivImg, MainCointainer, SubTitleImg, TitleImg } from "./landingpage.styled"

export const LandingPage = () => {
    
        return(
            <>
            <Header>
                <AcessButton type="button" onClick={() => redirect('/login')}>Acessar</AcessButton>
                
            </Header>
            <div>
        <MainCointainer>
            <DivContainer>
             <DivImg>
                <TitleImg>As melhores histórias em um só lugar.</TitleImg>
                <SubTitleImg>Ache seu melhor filme.</SubTitleImg>
                <SubTitleImg>Não sabe o que assistir? Cadastre-se aqui!</SubTitleImg>
                <ButtonRegister>Vamos lá?</ButtonRegister>
             </DivImg>
            </DivContainer>
        </MainCointainer>
        </div>
        </>
    )}
