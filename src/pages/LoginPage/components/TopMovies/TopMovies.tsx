import { LiMovies, PosterImage } from './topmovies.styled';
import { useContext } from 'react';
import { UserContext } from '../../../../provider/UserContext';
import heart from '../../../../assets/img/blueHeart.svg';
import { handleSaveMovie } from '../../../../services/api';

export const TopMovies = () => {
    const { moviesPoster, user,saibaMaisClick } = useContext(UserContext);

    return (
        <>
            {moviesPoster.map((element: any) => (
                <LiMovies key={element.id}>
                    <>
                        {user && <img className='blue-heart' src={heart} onClick={()=> handleSaveMovie(element.id, user)}/>}
                        <PosterImage
                            src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
                            alt=''
                        />
                        {user && <button onClick={()=>saibaMaisClick(element.id)}>Saiba mais</button>}
                    </>
                </LiMovies>
            ))}
        </>
    );
};
