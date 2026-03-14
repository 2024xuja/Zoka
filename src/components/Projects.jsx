import Full from '../assets/Full.png'

export default function () {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between gap-10 p-10">
     <img src={Full} alt="" className='w-804px h-550px shadow-4xl'  />
      <div className="w-full md:w-1/2">
        <h1 className="font-bold text-4xl text-[#1A093C] mb-5">
          Experiments <br /> and personal projects.
        </h1>
        <p className="font-semibold text-[#1A093C] opacity-80 mb-10">
          Your ceremony & reception venues, your vision, your dress, your <br />
          colours and anything else you would like to share with us. I am a <br /> Gold
          Coast and Brisbane.
        </p>

        <div className=" h-full bg-[#F6F5FB] py-8 flex items-center justify-around rounded-xl">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#1A1A1A]">58+</span>
            <span className="text-gray-500">Cute Customer</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#1A1A1A]">38+</span>
            <span className="text-gray-500">Rewards</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#1A1A1A]">98+</span>
            <span className="text-gray-500">Project Completed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
