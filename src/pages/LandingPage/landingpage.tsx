import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';
import {
    AcessButton,
    ButtonRegister,
    DivContainer,
    MainCointainer,
    SubTitleImg,
    TitleImg,
} from './landingpage.styled';
import logo from '../../assets/img/logo.svg'

export const LandingPage = () => {
    return (
        <>
         <MainCointainer>
         <Header>
                <AcessButton type='button'><Link to='/'>Acessar</Link></AcessButton>
            </Header>
            <figure>
                <img src={logo} alt="" />
            </figure>
                    <DivContainer>
                            <TitleImg>
                                As melhores histórias em um só lugar.
                            </TitleImg>
                            <SubTitleImg>Ache seu melhor filme.</SubTitleImg>
                            <SubTitleImg>
                                Não sabe o que assistir? Cadastre-se aqui!
                            </SubTitleImg>
                            <ButtonRegister><Link to='/register'>Vamos lá!</Link></ButtonRegister>
                    </DivContainer>
        </MainCointainer>
        </>
    );
};
