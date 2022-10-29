import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FilmeDestaque from './components/FilmeDestaque';
import '../src/App.css';
export default function App() {
  const [movielList, setMovieList] = useState([]);
  const [dataDestaque, setDestaqueData] = useState(null);

  useEffect(() => {
    const loadA = async () => {
      let lista = await Tmdb.getInicio();
      setMovieList(lista);

      let originals = lista.filter(i=>i.slug === 'originals');
      let aleatorio = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let escolha = originals[0].items.results[aleatorio];
      let escolhaInfo = await Tmdb.movieInfo(escolha.id, 'tv');
      setDestaqueData(escolhaInfo);
    }
    loadA();
  }, []);
  return (
    <div className='page'>
      {dataDestaque && 
      <FilmeDestaque item={dataDestaque}/>
      }
      
      <header></header>
      <section className='listas'>
        {movielList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>
      <footer></footer>
    </div>
  );
}