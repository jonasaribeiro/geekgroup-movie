import { StyledModalWrapper } from './styledTrailerModal';
import { useRef, useEffect } from 'react';

interface Props {
    trailer: any;
    setShowTrailerModal: (show: boolean) => void;
}

export const TrailerModal = ({ trailer, setShowTrailerModal }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            setShowTrailerModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return trailer ? (
        <StyledModalWrapper className='ModalWrapper'>
            <div className='modal' ref={modalRef}>
                <button onClick={() => setShowTrailerModal(false)}>X</button>
                <iframe
                    src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
                    title='Youtube video'
                    allowFullScreen
                ></iframe>
            </div>
        </StyledModalWrapper>
    ) : (
        null
    );
};
