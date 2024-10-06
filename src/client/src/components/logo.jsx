import bmwLogo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom'; 

function Logo() {
  return (
    <Link to=''><img src={bmwLogo} alt="Logo de BMW" className="w-36" /></Link>
  );
}

export default Logo;