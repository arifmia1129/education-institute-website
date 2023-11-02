import img1 from "../assets/institute.jpg";
import img2 from "../assets/student.jpg";

const AboutUsBanner = () => {
  return (
    <div className="my-10">
      <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500">
        <h1 className="text-xl font-bold">আমাদের সম্পর্কে</h1>
      </div>
      <div className="md:flex items-center">
        <div className="flex-1">
          <p className="font-semibold text-lg">
            কুলাঘাট উচ্চ বিদ্যালয়ে আপনাকে স্বাগতম
          </p>
          <p className="my-5">
            কুলাঘাট উচ্চ বিদ্যালয় ১৯৬৬ ইং সালে প্রতিষ্ঠিত হয় ।(EIIN: 122950,
            School Code: 7257)
          </p>
          <button className="btn btn-primary text-white">বিস্তারিত</button>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
            <img width={300} src={img1} alt="" />
            <img width={300} src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
