import { HiArrowRightCircle } from "react-icons/hi2";
import Camera1 from '../assets/Camera1.png'
import Camera2 from '../assets/Camera2.png'
import Camera3 from '../assets/Camera3.png'

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center gap-7 p-9">
      <div>
        <h1 class="text-7xl font-black w-109.5 text-[#1A093C]  font-700 mb-7">
          Where creative process happens
        </h1>
        <p className="flex mb-8 font-regular text-[#1A093CCC]">
          {" "}
          Your creativity, our inspiration <br /> Whatever your story, set if
          free.
        </p>
        <button className="relative p-3.5 px-12  bg-[#3F41A6] rounded-full text-white font-medium">
          Get in Touch{" "}
        </button>
      </div>
      <div>
            <img src={Camera1} alt="Camera rasmi" className="w-680px h-400px mb-5"/>
            <div className="flex">
            <img src={Camera2} alt="Bizning rasm" className="w-279px h-250px " />
            <img src={Camera3} alt="Qiz" className="w-380px h-250px  pl-5.25" />
            </div>
      </div>
    </section>
  );
}
