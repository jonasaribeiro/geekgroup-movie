import { Container2, StyledText, ProfileImg } from './ProfileInfo.styled';
// import profileImg from '../../../.BaseTest/profileimg.svg';
import { useContext } from 'react';
import { UserContext } from '../../../../provider/UserContext';

export const ProfileInfo = () => {
    const { user } = useContext(UserContext);

    return (
        <Container2>
            {/* <ProfileImg src={profileImg} alt='' /> */}
            <StyledText>Nome: Jucelinio biruleibe silve</StyledText>
            <StyledText>Email: jucelinoMatador@gmail.com</StyledText>
        </Container2>
    );
};
