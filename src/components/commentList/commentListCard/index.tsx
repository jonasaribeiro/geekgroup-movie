import { StyledCommentListCard } from './StyledCommentListCard';
import greyHeart from '../../../assets/img/likeHeartOrange.svg';
import profilImg from '../../../assets/img/profileComment.svg';
export const CommentListCard = () => {
    return (
        <StyledCommentListCard>
            <div className='top_comment'>
                <img src={profilImg} alt='profileImg' />
                <h2>Profile name</h2>
            </div>
            <div className='bottom_comment'>
                <p>
                    Esse filme é nblakc asdaksd alsd Esse filme é nblakc asdaksd
                    alsd Esse filme é nblakc asdaksd alsd Esse filme é nblakc
                    asdaksd alsd Esse filme é nblakc asdaksd alsd Esse filme é
                    nblakc asdaksd alsd Esse filme é nblakc asdaksd alsd Esse
                    filme é nblakc asdaksd alsda Esse filme é nblakc asdaksd
                    alsd Esse filme é nblakc asdaksd alsd Esse filme é nblakc
                    asdaksd alsda
                </p>
                <div className='likeButton'>
                    <p>23</p>
                    <button>
                        <img src={greyHeart} alt='heartImg' />
                    </button>
                </div>
            </div>
        </StyledCommentListCard>
    );
};
