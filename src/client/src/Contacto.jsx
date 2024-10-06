import portadaContacto from './assets/contacto/portadaContacto 1.png';
import iconosPF from './assets/contacto/iconosPF.png';
import app from './assets/contacto/app.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';





function Contacto() {
    return (
      <div>
        <div className="font-sans grid grid-cols-2 gap-4">
          <div className="col1 h-screen">
            <h1 className="text-7xl mx-12  font-sans text-right mt-48 text-[#333333]">Atención personalizada  al cliente</h1>
            <h6 className='text-xl mx-12 font-sans text-right mt-8 text-[#333333]'>Aquí obtendrás respuesta a todas tus preguntas relacionadas con tu BMW, datos de contacto de los servicios de Atención al Cliente y concesionarios BMW.</h6>
          </div>
          <div className="col2 h-screen">
            <img src={portadaContacto} alt="" className='' />
          </div>
        </div>
        <div className='p-16'>
          <h1 className='text-3xl font-sans text-center text-[#333333] mt-16'>Preguntas frecuentes</h1>
          <img src={iconosPF} alt="" className='mx-auto mt-8'/>
          <div className='flex justify-center gap-32 mt-[-40px] pb-12'>
            <p>Modelos y tecnologías</p>
            <p>Compras y servicios</p>
            <p>Electromovilidad</p>
            <p>BMW drive conectado</p>
            <p>Servicios de finanzas</p>
          </div>
        </div>
        <div className='font-sans grid grid-cols-2 gap-4 pt-16 pb-16'>
          <div className='justify-center flex'>
            <img src={app} alt="" className='h-screen' />
          </div>
          <div className='text-center'>
            <h2 className='text-5xl mt-40 font-sans text-[#333333]'>Descargar My BMW app</h2>
            <div className='mt-20 text-center justify-center items-center'>
              <button className="bg-transparent hover:bg-[#FFDC7F] hover:border-none font-light py-4 px-16 border border-[#333333] "><FontAwesomeIcon icon={faGooglePlay} size="5x" /><span className="text-3xl ml-4">Play Store</span></button>
            </div>
            <div className='mt-20'>
              <button className="bg-transparent hover:bg-[#FFDC7F] hover:border-none font-light py-4 px-16 border border-[#333333]"><FontAwesomeIcon icon={faApple} size="5x" /><span className='text-3xl ml-4'>App store</span></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  export default Contacto;
  