import dipuMoni from "../../assets/dipu-moni.jpg";
import mohibulHasan from "../../assets/mohibul-hasan.jpg";
import abdusSamad from "../../assets/abdus-samad.jpg";
import zohirUddin from "../../assets/zohir-uddin.png";
const Persons = () => {
  return (
    <div className="w-full">
      <div>
        <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500 mb-2">
          <h1 className="text-xl font-bold">মাননীয় মন্ত্রী</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="w-52 h-60" src={dipuMoni} alt="" />
          </div>
          <p className="font-bold text-xl text-center my-2">
            ডা. দিপু মনি, এমপি
          </p>
        </div>
      </div>
      <div>
        <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500 mb-2">
          <h1 className="text-xl font-bold">মাননীয় উপমন্ত্রী</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="w-52 h-60" src={mohibulHasan} alt="heelo" />
          </div>
          <p className="font-bold text-xl text-center my-2">
            মহিবুল হাসান চৌধুরী, এম.পি.
          </p>
        </div>
      </div>
      <div>
        <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500 mb-2">
          <h1 className="text-xl font-bold">মাননীয় চেয়ারম্যান</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="w-52 h-60" src={abdusSamad} alt="heelo" />
          </div>
          <p className="font-bold text-xl text-center my-2">
            প্রফেসর সঃ মঃ আব্দুস সামাদ আজাদ
          </p>
        </div>
      </div>
      <div>
        <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500 mb-2">
          <h1 className="text-xl font-bold">মাননীয় সচিব</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="w-52 h-60" src={zohirUddin} alt="heelo" />
          </div>
          <p className="font-bold text-xl text-center my-2">
            প্রফেসর মোঃ জহির উদ্দিন
          </p>
        </div>
      </div>
      <div>
        <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500 mb-2">
          <h1 className="text-xl font-bold">প্রধান শিক্ষক</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="w-52 h-60" src={zohirUddin} alt="heelo" />
          </div>
          <p className="font-bold text-xl text-center my-2">
            প্রফেসর মোঃ জহির উদ্দিন
          </p>
        </div>
      </div>
    </div>
  );
};

export default Persons;
