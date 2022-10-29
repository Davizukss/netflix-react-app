import './MovieRow.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from 'react';
export default function ({ title, items }) {
    const [scroll, setscroll] = useState(-400);
    const leftArrow = () =>{
        let x = scroll + Math.round(window.innerWidth /2);
        if(x > 0){
            x=0;
        }
        setscroll(x);
    }
    const rigthArrow = () =>{
        let x = scroll - Math.round(window.innerWidth /2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x =(window.innerWidth - listW) - 60;
        }
        setscroll(x);
    }
    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='nBefore' onClick={leftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className='nNext' onClick={rigthArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className='movieRowArea'>
                <div className='movieRowList'
                style={{
                    marginLeft: scroll,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className='movieRowItem'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}