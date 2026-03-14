import Gul11 from '../assets/Gul11.png'
import Gul2 from '../assets/Gul2.png'
import Gul3 from '../assets/Gul3.png'

export default function Slayder() {
  return (
    <div className="min-h-screen bg-white p-10 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Floral Design in a event planning company
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your ceremony & reception venues, your vision, your dress, your
            colours and anything else you would like to share with us. I am a
            Gold Coast and Brisbane.
          </p>
          <button className="relative p-3.5 px-12  bg-[#3F41A6] rounded-full text-white font-medium shadow-2xl cursor-pointer">
            Get in Touch{" "}
          </button>
          <div className="pt-10">
            <div className="mt-4 text-2xl font-bold">
                <img src={Gul11} alt="gul" className='w-75 h-100' />
              01 <span className="text-sm text-gray-400">/18</span>
            </div>
          </div>
        </div>

        <div className="md:pt-40">
          <div className="mt-4 text-2xl font-bold">
            <img src={Gul2} alt="" className='w-75 h-100' />
            02 <span className="text-sm text-gray-400">/18</span>
          </div>
        </div>

        <div className="space-y-20">
          <div>
            <div className="mt-4 text-2xl font-bold">
                <img src={Gul3} alt="" className='w-75 h-100'/>
              03 <span className="text-sm text-gray-400">/18</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between mt-90">
            <div className="w-2/3 h-1 bg-gray-100 relative">
              <div className="absolute left-0 top-0 h-full bg-black w-1/2"></div>
            </div>
            <button className="text-sm font-semibold flex items-center gap-1">
              Next <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
