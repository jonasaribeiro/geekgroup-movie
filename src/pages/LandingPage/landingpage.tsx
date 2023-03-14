import { redirect, useNavigate } from 'react-router-dom';
import { Header } from '../../components/header/header';
import {
    AcessButton,
    ButtonRegister,
    DivContainer,
    DivImg,
    MainCointainer,
    SubTitleImg,
    TitleImg,
} from './landingpage.styled';

export const LandingPage = () => {
    const navigate=useNavigate()
    return (
        <>
            <Header>
                <AcessButton type='button' onClick={() => navigate('/login')}>
                    Acessar
                </AcessButton>
            </Header>
            <div>
                <MainCointainer>
                    <DivContainer>
                        <DivImg>
                            <TitleImg>
                                As melhores histórias em um só lugar.
                            </TitleImg>
                            <SubTitleImg>Ache seu melhor filme.</SubTitleImg>
                            <SubTitleImg>
                                Não sabe o que assistir? Cadastre-se aqui!
                            </SubTitleImg>
                            <ButtonRegister onClick={()=>navigate('/register')}>Vamos lá?</ButtonRegister>
                        </DivImg>
                    </DivContainer>
                </MainCointainer>
            </div>
        </>
    );
};
