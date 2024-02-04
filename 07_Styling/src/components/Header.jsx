import logo from '../assets/logo.png';
import clssses from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
          <h1>ReactArt</h1>
          <p className={clssses.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
