import { Container2, StyledText, ProfileImg } from './ProfileInfo.styled';
import { useContext } from 'react';
import { UserContext } from '../../../../provider/UserContext';

export const ProfileInfo = () => {
    const { user } = useContext(UserContext);

    return (
        <Container2>
            <StyledText>Nome: Jucelinio biruleibe silve</StyledText>
            <StyledText>Email: jucelinoMatador@gmail.com</StyledText>
        </Container2>
    );
};
