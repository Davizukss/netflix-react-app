import './FilmeDestaque.css'
export default function ({ item }) {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    return (
        <section className='destaque' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='destaqueVertical'>
                <div className='destaqueHorizontal'>
                    <div className='destaqueNome'>
                        {item.original_name}
                    </div>
                    <div className='destaqueInfo'>
                        <div className='destaquePontos'>{item.vote_average} pontos</div>
                        <div className='destaqueAno'>{firstDate.getFullYear()}</div>
                        <div className='destaqueTemporadas'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='destaqueDescription'>{item.overview}</div>

                    <div className='buttons'>
                        <a href={`/watch/${item.id}`}>▶ Assistir</a>
                        <a href={`/list/add/${item.id}`}>+ Minha Lista</a>

                    </div>
                    <div className='detaqueGeneros'><strong>Gêneros: </strong>{genres.join(', ')}...</div>
                </div>
            </div>
        </section>
    )
}