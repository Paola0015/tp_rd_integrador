function Reclamos() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center align-center text-center gap-4 mb-12">
        <div className="w-96 text-center border mt-12 rounded-lg border-[#333333]">
          <h2 className="text-4xl my-4 font-regular font-sans">Login</h2>
          <div className="bg-[#78B7D0] h-40"></div>
          <form action="" className="my-6">
            <div className="mx-4">
              <label className="block text-[#333333]  font-regular mb-2">Usuario</label>
              <input className="border border-[#333333] opacity-50 rounded-lg w-full py-2 text-[#333333]  focus:outline" type="text" required />
            </div>
            <div className="mt-8 mx-4">
              <label className="block text-[#333333]  font-regular mb-2">Contraseña</label>
              <input className="border border-[#333333] opacity-50 rounded-lg w-full py-2 px-3 text-[#333333]  focus:outline" type="text" required />
            </div>
            <div className="mx-4">
              <button className="mt-16 border hover:bg-[#FFDC7F]  hover:text-black hover:border-0 text-[#333333] font-sans font-regular border-[#333333] py-3 w-full text-3xl rounded-lg ">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Reclamos;
