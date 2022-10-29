import '../Header/Header.css';
export default function Header({black}){
    return(
        <header className={black ? 'black' : ''}>
            <div className='headerLogo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png' alt='Netflix'></img>
                </a>
            </div>
            <div className='avatarUser'>
                <a href='/'><img src='https://occ-0-110-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABb9mMbxYjWjrqym1X7znS_ggYPEG0013jqhgDkE44bes2qwpfHVvZdZu1oMm2lkW1x58YiLwtJhOWHSwAih3BEe2TIVnWbQ.png?r=869'></img></a>
            </div>
            </header>
    );
}