import { StyledMovieDescription } from './styledMovieDescription';

export const MovieDescription = () => {
    return (
        <StyledMovieDescription>
            <div className='title'>
                <h2>Nome do filme</h2>
                <div className='saveButton'>
                    <h2>Salvar</h2>
                    <img src='' alt='salvar' />
                </div>
            </div>

            <img className='poster' src='' alt='Poster' />

            <div className='bottomPost'>
                <div className='subinformationDiv'>
                    <p>Duracao: 2h 5m</p>
                    <p>Ano:2022</p>
                </div>

                <button>Ver Trailer</button>
            </div>

            <div className='sinapseDiv'>
                <h2 className='Sinapse'>Sinapse</h2>
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
