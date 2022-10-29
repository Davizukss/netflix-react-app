import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FilmeDestaque from './components/FilmeDestaque';
import loading from './img/loading.gif';
import '../src/App.css';
import Header from './components/Header';
import git from '../src/img/git.svg';
import linkedin from '../src/img/linkedin.svg';
export default function App() {
  const [movielList, setMovieList] = useState([]);
  const [dataDestaque, setDestaqueData] = useState(null);
  const [blackHeader, setBlack] = useState(false);

  useEffect(() => {
    const loadA = async () => {
      let lista = await Tmdb.getInicio();
      setMovieList(lista);

      let originals = lista.filter(i => i.slug === 'originals');
      let aleatorio = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let escolha = originals[0].items.results[aleatorio];
      let escolhaInfo = await Tmdb.movieInfo(escolha.id, 'tv');
      setDestaqueData(escolhaInfo);
    }
    loadA();
  }, []);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlack(true);
      }
      else {
        setBlack(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  })
  return (
    <div className='page'>
      <Header black={blackHeader} />
      {dataDestaque &&
        <FilmeDestaque item={dataDestaque} />
      }


      <section className='listas'>
        {movielList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>
      <footer>
        <a href='https://www.linkedin.com/in/davivarella'><img className='gitLogo' src={linkedin} /></a>
        <a href='https://github.com/Davizukss'><img className='gitLogo' src={git} /><p>@Davizukss Api: Tmdb.org 2022</p></a>
      </footer>
      {movielList.length <= 0 &&
        <div className='loading'>
          <img src={loading} alt='Carregando'></img>
        </div>
      }

    </div>
  );
}