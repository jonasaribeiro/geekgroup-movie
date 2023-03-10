import { StyledCommentListCard } from './StyledCommentListCard';
import greyHeart from '../../../assets/img/likeHeartOrange.svg';
import profilImg from '../../../assets/img/profileComment.svg';

interface icommentCard {
    name: string;
    img: string;
    comment: string;
    likes: number;
}

export const CommentListCard = ({
    name,
    img,
    comment,
    likes,
}: icommentCard) => {
    return (
        <StyledCommentListCard>
            <div className='top_comment'>
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <div className='likeButton'>
                    <p>{likes}</p>
                    <button>
                        <img src={greyHeart} alt='heartImg' />
                    </button>
                </div>
            </div>

            <div className='bottom_comment'>
                <p>{comment}</p>
            </div>
        </StyledCommentListCard>
    );
};
