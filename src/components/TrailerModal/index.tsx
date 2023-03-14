import { StyledModalWrapper } from './styledTrailerModal';
import { useRef, useEffect } from 'react';

interface Props {
    trailer: any;
    setShowTrailerModal: (show: boolean) => void;
}

export const TrailerModal = ({ trailer }: Props) => {
    return trailer ? (
        <StyledModalWrapper
            src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
            title='Youtube video'
            allowFullScreen
        ></StyledModalWrapper>
    ) : null;
};
