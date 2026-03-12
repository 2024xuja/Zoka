import Circle from "../assets/Circle.png";
import Circle2 from "../assets/Circle2.png";
import Circle3 from "../assets/Circle3.png";

export default function Choose() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div>
        <h1 className="font-bold text-center text-4xl text-[rgb(26,9,60)] mb-10">
          Why Choose us...
        </h1>
        <div className="flex items-center gap-40 p-9">
          <div className="flex flex-col items-center">
            <img src={Circle2} alt="dumaloq" className="w-30 h-30" />

            <h1 className="font-bold">Professional editing</h1>
            <p className="text-center">
              Your creativity our inspiration. <br /> Whatever you want
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Circle2} alt="dumaloq" className="w-30 h-30" />

            <h1 className="font-bold">Long hour shoots</h1>
            <p className="text-center">
              Your creativity our inspiration. <br /> Whatever you want
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Circle2} alt="dumaloq" className="w-30 h-30" />

            <h1 className="font-bold">Extensive equipment</h1>
            <p className="text-center">
              Your creativity our inspiration. <br /> Whatever you want
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
