// import poster from '../../../../.BaseTest/poster.svg';
import { Button1, Button2, StyledLi } from './MovieLi.styled';

export const MovieLI = () => {
    return (
        <StyledLi>
            <Button1 type='button'>Remover</Button1>
            {/* <img src={poster} alt='' /> */}
            <Button2 type='button'>Saiba Mais</Button2>
        </StyledLi>
    );
};
