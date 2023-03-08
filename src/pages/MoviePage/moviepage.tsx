import { CommentList } from '../../components/commentList';
import { Header } from '../../components/header/header';
import { MovieDescription } from '../../components/movieDescription';
import { StyledMoviePage } from './StyledMoviePage';
import profile from '../../assets/img/profileHeaderImg.svg';
import { Link} from 'react-router-dom';
export {};

export const MoviePage = () => {

    return (
        <>
            <StyledMoviePage>
                <Header>
                    <div className='profileDiv'>
                        <div>
                            <img src={profile} alt='profile image' />
                            <Link to={'/'}>Profile</Link>
                        </div>

                        <Link to={'/'}>Voltar</Link>
                    </div>
                </Header>
                <main>
                    <div className='container'>
                        <MovieDescription />

                        <form>
                            <h3>Comentários</h3>
                            <div className='postCommentDiv'>
                                <textarea
                                    placeholder='Deixe seu comentário...'
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
