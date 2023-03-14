import { ReactNode } from 'react';
import logo from '../../assets/img/logo.svg';
import { Img, StyledHeader } from './header.styled';
import { Link } from 'react-router-dom';

export const Header = ({ children }: { children: ReactNode }) => {
    return (
        <StyledHeader>
            <Link to='/'>
                <figure>
                    <Img src={logo} alt='' />
                </figure>
            </Link>
            <div>{children}</div>
        </StyledHeader>
    );
};
