import { StyledPostCommentForm } from './stylePostCommentForm';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { jsonApi } from '../../services/api';
import { useContext } from 'react';
import { UserContext } from '../../provider/UserContext';
import { useParams } from 'react-router-dom';

export interface ipostComment {
    comment: string;
}
export interface iUser {
    accessToken: string;
    user: {
        email: string;
        name: string;
        img: string;
        id: number;
    };
}

const schema = yup
    .object({
        comment: yup.string().required('* Campo obrigatório'),
    })
    .required();

export const CommentForm = () => {
    const { user } = useContext(UserContext);
    const { id } = useParams();
    console;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ipostComment>({
        resolver: yupResolver(schema),
    });

    const postComment = async (
        data: ipostComment,
        userData: iUser,
        movieId: any
    ) => {
        const info = {
            ...data,
            user: {
                name: userData.user.name,
                img: userData.user.img,
            },
            userId: userData.user.id,
            likes: 10,
            movieId: Number(movieId),
        };

        try {
            const request = await jsonApi.post('/comments', info, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            });
            console.log(request);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit: SubmitHandler<ipostComment> = (data) => {
        postComment(data, user, id);
    };

    return (
        <StyledPostCommentForm onSubmit={handleSubmit(onSubmit)}>
            <h3>Comentários</h3>
            <div className='postCommentDiv'>
                <textarea
                    {...register('comment')}
                    name='comment'
                    placeholder='Deixe seu comentário...'
                />
                <button type='submit'>Comentar</button>
            </div>
            <p className='erroMessage'>{errors && errors.comment?.message}</p>
        </StyledPostCommentForm>
    );
};
