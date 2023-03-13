import { StyledCommentListCard } from './StyledCommentListCard';
import orangeHeart from '../../../assets/img/likeHeartOrange.svg';
import greyHeart from '../../../assets/img/likeHeartGrey.svg';
import { useState } from 'react';
import { jsonApi } from '../../../services/api';

interface icommentCard {
    name: string;
    img: string;
    comment: string;
    likes: number;
    commentId: number;
}

export const CommentListCard = ({
    name,
    img,
    comment,
    likes,
    commentId,
}: icommentCard) => {
    const [heartColor, setHeartColor] = useState('grey');
    function changeColor() {
        if (heartColor === 'grey') {
            setHeartColor('orange');
        } else {
            setHeartColor('grey');
        }
    }

    async function addToCommentNumber(commentId: number) {
        changeColor();
        try {
            const request = await jsonApi.patch(
                `/comments/${commentId}`,
                {
                    likes: likes + 1,
                },
                {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlM0B0ZXN0ZS5jb20iLCJpYXQiOjE2Nzg2NzM3NjQsImV4cCI6MTY3ODY3NzM2NCwic3ViIjoiMyJ9.70-cvd9eSs0Eh8OqplchPMMS3Vf1jcfHICdRojEgsLQ`,
                    },
                }
            );
            console.log(request);
        } catch (error) {
            console.log(error);
        }
    }
    async function decreaseToCommentNumber(commentId: number) {
        if (likes >= 1) {
            changeColor();
            try {
                const request = await jsonApi.patch(
                    `/comments/${commentId}`,
                    {
                        likes: likes - 1,
                    },
                    {
                        headers: {
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlM0B0ZXN0ZS5jb20iLCJpYXQiOjE2Nzg2NzM3NjQsImV4cCI6MTY3ODY3NzM2NCwic3ViIjoiMyJ9.70-cvd9eSs0Eh8OqplchPMMS3Vf1jcfHICdRojEgsLQ`,
                        },
                    }
                );
                console.log(request);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <StyledCommentListCard>
            <div className='top_comment'>
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <div className='likeButton'>
                    <p>{likes}</p>
                    <button
                        onClick={() =>
                            heartColor === 'grey'
                                ? addToCommentNumber(commentId)
                                : decreaseToCommentNumber(commentId)
                        }
                    >
                        <img
                            src={
                                heartColor === 'grey' ? greyHeart : orangeHeart
                            }
                            alt='heartImg'
                        />
                    </button>
                </div>
            </div>

            <div className='bottom_comment'>
                <p>{comment}</p>
            </div>
        </StyledCommentListCard>
    );
};
