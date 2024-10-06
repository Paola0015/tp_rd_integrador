import img1 from '../assets/mejorm/m1.png';
import img2 from '../assets/mejorm/m2.png';
import img3 from '../assets/mejorm/m3.png';
import img4 from '../assets/mejorm/m4.png';
import img5 from '../assets/mejorm/m5.png';



function Mejorm() {

  return (
    <div className="container mx-auto pb-14">
      <h2 className='text-6xl font-light font-sans mb-12'>Elegí tu mejor M</h2>
      <div className="container w-70 h-[500px] flex justify-center gap-3 hover:w-70">
        <img src={img1} alt="" className='w-20 h-full object-cover rounded-lg border-2  transition-all ease-in-out duration-500 opacity-80 hover:w-80 hover:opacity-100' />
        <img src={img2} alt="" className='w-20 h-full object-cover rounded-lg border-2  transition-all ease-in-out duration-500 opacity-80 hover:w-80 hover:opacity-100'/>
        <img src={img3} alt="" className='w-20 h-full object-cover rounded-lg border-2  transition-all ease-in-out duration-500 opacity-80 hover:w-80 hover:opacity-100'/>
        <img src={img4} alt="" className='w-20 h-full object-cover rounded-lg border-2  transition-all ease-in-out duration-500 opacity-80 hover:w-80 hover:opacity-100'/>
        <img src={img5} alt="" className='w-20 h-full object-cover rounded-lg border-2  transition-all ease-in-out duration-500 opacity-80 hover:w-80 hover:opacity-100'/>
      </div>
    </div>
  );
}


export default Mejorm;