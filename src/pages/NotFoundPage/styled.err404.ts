import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNotFoudPage = styled.div`
    img {
        position: relative;
        height: 100%;
        width: 100%;
    }
`;

export const StyledLinkSendMeBack = styled(Link)`
    position: absolute;
    height: 50px;
    width: 117px;
    left: 0;
    top: 0;

    background: orange;
    text-align: center;
    padding: 15px;
    border-radius: 8px;
`;
