import NotFound from '../../assets/img/notfound.svg';
import { StyledLinkSendMeBack, StyledNotFoudPage } from './styled.err404';

export const NotFoundPage = () => {
    return (
        <StyledNotFoudPage>
            <img src={NotFound} alt='pagina nao encontrada' />
            <StyledLinkSendMeBack to={'/register'}>
                Me tire daqui
            </StyledLinkSendMeBack>
        </StyledNotFoudPage>
    );
};
