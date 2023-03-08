import { CommentList } from '../../components/commentList';
import { MovieDescription } from '../../components/movieDescription';
import { StyledMoviePage } from './StyledMoviePage';

export {};

export const MoviePage = () => {
    return (
        <>
            <StyledMoviePage>
                <header>Aqui esta o header</header>
                <main>
                    <p>teste</p>
                    <div className='container'>
                        <MovieDescription />

                        <form>
                            <h3>Comentários</h3>
                            <div className='postCommentDiv'>
                                <textarea
                                    placeholder='deixe seu comentário...'
                                    name='comentário'
                                />
                                <button type='submit'>Comentar</button>
                            </div>
                        </form>
                        <CommentList />
                    </div>
                </main>
            </StyledMoviePage>
        </>
    );
};
