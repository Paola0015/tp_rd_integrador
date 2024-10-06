import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4 text-[#333333]">
        <li><Link to="/Institucional" className="font-sans font-light hover:text-[#16325B] hover:font-normal">Institucional</Link></li>
        <li><Link to="/Reclamos" className="font-sans font-light hover:text-[#16325B] hover:font-normal">Reclamos</Link></li>
        <li><Link to="/Contacto" className="font-sans font-light hover:text-[#16325B] hover:font-normal">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;