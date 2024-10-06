import Portada from './assets/institucional/portada.png';
import Parrillas from './components/Parrillas';



function Institucional() {
  return (
    <div>
      <div className="relative font-sans">
        <div className='py-32'>
          <h1 className="text-5xl mb-12 font-sans  p-6 text-[#333333]">Diseños de la famosa parrilla emblemática</h1>
          <img src={Portada} alt=""  className='w-full h-auto'/>
          <div className='flex justify-center text-center'>
            <h3 className='text-2xl mb-12 flex justify-center  text-center w-[1400px] font-sans p-6 text-[#333333]'>Desde 1933, casi todos los BMW han llevado una parrilla frontal en forma de doble  riñón. Su diseño ha cambiado con el tiempo; es más funcional e inteligente, sin dejar de ser distintivo. Presentamos un viaje por la historia de la parrilla BMW.</h3>
          </div>
        </div>
      </div>
      <Parrillas />
    </div>
  );
}


export default Institucional;

