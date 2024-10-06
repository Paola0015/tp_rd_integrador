import Portada from '../assets/hero/portada.jpg';
import Des1 from '../assets/destacados/des1.png';
import Des2 from '../assets/destacados/des2.png';
import Des3 from '../assets/destacados/des3.png';
import Mejorm from '../components/Mejorm';



function Inicio() {

  return (
      <div>
        <div className="relative font-sans">
          <img src={Portada} alt="Coche de hidrógeno" className="w-full h-screen object-cover" />
          <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/3 border p-10 text-center text-white">
            <p className="text-xl font-normal font-sans text-[#F2F2F2]">Hidrógeno</p>
            <h1 className="text-2xl font-semibold font-sans text-[#F2F2F2]">Espíritu pionero para la movilidad del futuro</h1>
            <button className="mt-8 border hover:bg-[#FFDC7F]  hover:text-black hover:border-0 text-[#F2F2F2] fon-sans font-bold py-4 px-12 text-3xl rounded">Más detalles</button>
          </div>
        </div>
        <div className="container mx-auto p-32">
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center pb-40">
              <img src={Des1} alt="Imagen 1" className="w-full h-72 object-cover mb-4" />
              <p>Desde 1933, casi todos los BMW han llevado una parrilla frontal en forma de doble riñón. Su diseño ha cambiado con el tiempo; es más funcional e inteligente, sin dejar de ser distintivo. Presentamos un viaje por la historia de la parrilla BMW.            </p>
            </div>
            <div className='pb-12'></div>
            <div className='pb-12'></div>
            <div className="flex flex-col items-center pb-40">
              <img src={Des2} alt="Imagen 2" className="w-full h-72 object-cover mb-4" />
              <p>Elegancia, belleza, originalidad: el legendario Concorso d’Eleganza, en el Grand Hotel Villa d’Este a orillas del lago Como, reúne todos los años los automóviles más espectaculares y bellos. Y es el escenario perfecto para la presentación mundial de un biplaza abierto que invita a viajar y a soñar.
              </p>
            </div>
            <div className="flex flex-col items-center pb-40">
              <img src={Des3} alt="Imagen 3" className="w-full h-72 object-cover mb-4" />
              <p>Alianza entre BMW y QLOCKTWO: nuevos estándares en diseño interior y experiencia de conducción en vehículos con sistema operativo 8.5 y 9.0. Un homenaje al tiempo que combina tecnología y estética y crea una experiencia única de arte digital en el interior de cada BMW.</p>
            </div>
            <div className='pb-12'></div>
          </div>
        </div>
        <Mejorm />
      </div>
  );
}

export default Inicio;