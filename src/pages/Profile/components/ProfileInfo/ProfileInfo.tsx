import { Container2, StyledText, ProfileImg } from './ProfileInfo.styled';
import { useContext } from 'react';
import { UserContext } from '../../../../provider/UserContext';

export const ProfileInfo = () => {
    const { user } = useContext(UserContext);

    return (
        <Container2>
            <ProfileImg src={user.user.img} />
            <StyledText>{user.user.name}</StyledText>
            <StyledText>{user.user.email}</StyledText>
        </Container2>
    );
};
