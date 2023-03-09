import NotFound from '../../assets/img/notfound.svg';
import { StyledNotFoudPage } from './styled.err404';

export const NotFoundPage = () => {
    return (
        <StyledNotFoudPage>
            <img src={NotFound} alt='pagina nao encontrada' />
        </StyledNotFoudPage>
    );
};
