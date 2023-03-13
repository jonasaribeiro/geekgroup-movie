import { LiMovies, PosterImage } from './topmovies.styled'
import { useContext } from 'react'
import { UserContext } from '../../../../provider/UserContext'

export const TopMovies = () => {

    const { moviesPoster } = useContext(UserContext);

    return (
<>
        {moviesPoster.map((element: any) => (
        <LiMovies id={element.id}>
            
            <PosterImage src={`https://image.tmdb.org/t/p/original/${element.poster_path}`} alt="" /> 
    
          
        </LiMovies>

        ))}
</>
    )
}