import logo from '../../assets/img/logo.svg';
import { Img, StyledHeader } from './header.styled';

export const Header = ({ children }) => {
    return (
        <StyledHeader>
            <figure>
                <Img src={logo} alt='' />
            </figure>
            <div>{children}</div>
        </StyledHeader>
    );
};
