import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../provider/UserContext';
import { jsonApi } from '../../services/api';
import { CommentListCard } from './commentListCard';
import { StyledCommentList } from './StyledCommentList';

export {};

interface iUserComment {
    name: string;
    img: string;
}

interface icomments {
    user: iUserComment;
    userId: number;
    comment: string;
    likes: number;
    movieId: number;
    id: number;
}

export const CommentList = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const [comments, setComments] = useState<icomments[]>([]);

    useEffect(() => {
        async function getComments() {
            try {
                const request = await jsonApi.get(`/comments?movieID=${id}`, {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`,
                    },
                });
                setComments(request.data);
            } catch (error) {
                console.log(error);
            }
        }
        getComments();
    }, [comments]);

    return (
        <StyledCommentList>
            {comments.map((commentItem) => (
                <CommentListCard
                    commentId={commentItem.id}
                    key={commentItem.id}
                    name={commentItem.user.name}
                    img={commentItem.user.img}
                    comment={commentItem.comment}
                    likes={commentItem.likes}
                />
            ))}
        </StyledCommentList>
    );
};
