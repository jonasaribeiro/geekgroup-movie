import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNotFoudPage = styled.div`
    background-image: url('src\assets\img\notfound.svg') cover;
    /* img {
        position: relative;
        height: 100%;
        width: 100%;
    } */
`;

export const StyledLinkSendMeBack = styled(Link)`
    position: absolute;
    height: 50px;
    width: 117px;
    left: 0;
    margin: 150px;
    background: orange;
    text-align: center;
    padding: 15px;
    border-radius: 8px;
`;
