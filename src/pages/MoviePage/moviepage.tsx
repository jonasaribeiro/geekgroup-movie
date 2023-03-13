import { CommentList } from '../../components/commentList';
import { Header } from '../../components/header/header';
import { MovieDescription } from '../../components/movieDescription';
import { StyledMoviePage } from './StyledMoviePage';
import { Link, useParams } from 'react-router-dom';
import { CommentForm } from '../../components/postCommentForm';
<<<<<<< HEAD

=======
import { useContext } from 'react';
import { UserContext } from '../../provider/UserContext';
export {};
>>>>>>> 2d027f0a6f1fda11f0824c6505179d53dd9fac08

export const MoviePage = () => {
    const { id } = useParams();
    const{user}=useContext(UserContext)

    return (
        <>
            <StyledMoviePage>
                <Header>
                    <div className='profileDiv'>
                        <div>
                            <img src={user.user.img} alt={user.user.name} />
                            <Link to={'/profile'}>Profile</Link>
                        </div>

                        <Link to={'/'}>Voltar</Link>
                    </div>
                </Header>
                <main>
                    <div className='container'>
                        <MovieDescription movieId={Number(id)} />

                        <CommentForm />
                        <CommentList />
                    </div>
                </main>
            </StyledMoviePage>
        </>
    );
};
