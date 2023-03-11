import { CommentList } from '../../components/commentList';
import { Header } from '../../components/header/header';
import { MovieDescription } from '../../components/movieDescription';
import { StyledMoviePage } from './StyledMoviePage';
import profile from '../../assets/img/profileHeaderImg.svg';
import { Link, useParams } from 'react-router-dom';
import { CommentForm } from '../../components/postCommentForm';


export const MoviePage = () => {
    const { id } = useParams();
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
                        <MovieDescription movieId={Number(id)} />

                        <CommentForm />
                        <CommentList />
                    </div>
                </main>
            </StyledMoviePage>
        </>
    );
};
