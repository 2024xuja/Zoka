import KattaGul from '../assets/KattaGul.png';
import Gul1 from '../assets/Gul1.png';

function Happens() {
  return (
    <section className='flex items-center justify-center gap-7 p-9'>
      <div>
           <img src={Gul1} alt="Kichik" className='w-47 h-114.75 mr-19'/>
      </div>
        <div>
           <img src={KattaGul} alt="KattaGul" className='w-59 h-114.75 flex shadow-2xs mr-19'/>
      </div>
      <div className=''>         
        <h1 className="flex text-[20px] font-semibold text-[#3F41A6] gap-2 ">GET TO KNOW US</h1>
        <h1 className="text-2xl font-bold font-serif mb-5"> 
          Why we make it <br /> happens
        </h1>
        <p className="flex text-18 mb-10">
          Your ceremony & reception venues, your <br /> vision, your dress, your
          colours and anything <br /> else you would like.
        </p>
        <button className="relative p-3.5 px-12 bg-[#3F41A6] rounded-full text-white font-medium shadow-2xl cursor-pointer">
          Get in Touch
        </button>
      </div>

    </section>
  );
}

export default Happens;