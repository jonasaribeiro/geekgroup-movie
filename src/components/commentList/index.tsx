import { CommentListCard } from './commentListCard';
import { StyledCommentList } from './StyledCommentList';

export {};

export const CommentList = () => {
    return (
        <StyledCommentList>
            <CommentListCard />
            <CommentListCard />
            <CommentListCard />
            <CommentListCard />
        </StyledCommentList>
    );
};
