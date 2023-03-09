import { StyledMovieDescription } from './styledMovieDescription';
import blueHeart from '../../assets/img/blueHeart.svg';
import poster from '../../assets/img/posterDescription.svg';

export const MovieDescription = () => {
    return (
        <StyledMovieDescription>
            <div className='title'>
                <h2>Nome do filme</h2>
                <div className='saveButton'>
                    <h2>Salvar</h2>
                    <img src={blueHeart} alt='salvar' />
                </div>
            </div>
            <div className='posterDiv'>
                <img className='poster' src={poster} alt='Poster' />
            </div>

            <div className='bottomPost'>
                <div className='subinformationDiv'>
                    <p>Duracao: 2h 5m</p>
                    <p>Ano:2022</p>
                </div>

                <button>Ver Trailer</button>
            </div>

            <div className='sinapseDiv'>
                <h2 className='Sinapse'>Sinopse</h2>
                <p>
                    descricadescricaodescricaodescricaoo descricao descricao v
                    descricao descricao descricao v descricao escricao descricao
                    descricao v descricao descricades cricaodescricaodescricaoo
                    descricao descricao v descricao descricao descricao v
                    descricao escricao descricao descricao v descricao{' '}
                </p>
            </div>
        </StyledMovieDescription>
    );
};
