import { HiArrowRightCircle } from "react-icons/hi2";
import Camera1 from '../assets/Camera1.png'

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center gap-7 p-9">
      <div>
        <h1 class="text-7xl font-black w-109.5 text-[#1A093C]  font-700 mb-7">
          Where creative process happens
        </h1>
        <p className="flex mb-8">
          {" "}
          Your creativity, our inspiration <br /> Whatever your story, set if
          free.
        </p>
        <button className="relative p-3.5 px-12  bg-[#3F41A6] rounded-full text-white">
          Get in Touch{" "}
        </button>
      </div>
      <div>
            <img src={Camera1} alt="Camera rasmi" className="w-550px"/>
      </div>
    </section>
  );
}
