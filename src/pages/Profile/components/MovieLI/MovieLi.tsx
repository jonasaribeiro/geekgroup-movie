import { Button1, Button2, StyledLi } from './MovieLi.styled';
import { useNavigate } from 'react-router-dom';
import { handleRemoveSavedMovie } from '../../../../services/api';
import { UserContext, iMovie } from '../../../../provider/UserContext';
import { useContext } from 'react';

export const MovieLI = ({ movieInfo }: { movieInfo: iMovie }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const handleClickRemove = () => {
        handleRemoveSavedMovie(movieInfo, user);
    };
    const handleClickMore = () => {
        navigate(`/`);
    };

    return (
        <StyledLi>
            <Button1 onClick={handleClickRemove} type='button'>
                Remover
            </Button1>
            <p>{`${movieInfo.id}`}</p>
            <Button2 onClick={handleClickMore} type='button'>
                Saiba Mais
            </Button2>
        </StyledLi>
    );
};
