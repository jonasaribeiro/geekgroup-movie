import { ReactNode } from 'react';
import logo from '../../assets/img/logo.svg';
import { Img, StyledHeader } from './header.styled';

interface TChildrenProps {
    children: ReactNode;
}

export const Header = ({ children }: TChildrenProps) => {
    return (
        <StyledHeader>
            <figure>
                <Img src={logo} alt='' />
            </figure>
            <div>{children}</div>
        </StyledHeader>
    );
};