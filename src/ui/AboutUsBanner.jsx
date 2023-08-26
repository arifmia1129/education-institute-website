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
            কোচাশহর দ্বি-মুখী উচ্চ বিদ্যালয়ে আপনাকে স্বাগতম
          </p>
          <p className="my-5">
            কোচাসার উচ্চ বিদ্যালয়, যা ১৯৬২ সালে প্রতিষ্ঠিত হয়, একটি শ্রেষ্ঠ
            শিক্ষা প্রতিষ্ঠানের রূপে অত্যন্ত গর্বিত। এই বিদ্যালয়ে প্রায় ৮০০
            শিক্ষার্থী তাদের পাঠ্যক্রম পূর্ণ করছেন। এখানে শ্রেণি ৬ থেকে ১০
            পর্যন্ত পাঠ পাচ্ছে এবং ৯ এবং ১০ শ্রেণির জন্য বিজ্ঞান এবং শিল্প দুটি
            বিভাগ রয়েছে। বিদ্যালয়ে মোট ১৫ উপাধ্যায়ী কাজ করছেন, যার মধ্যে
            মুখ্য শিক্ষক মোঃ রফিকুল ইসলাম এবং উপ-মুখ্য শিক্ষক মোঃ আইয়ুব হোসেন
            অত্যন্ত প্রমুখ। বিদ্যালয়ে একটি সুন্দর খেলাধীন মাঠ আছে যেখানে
            শিক্ষার্থীরা খেলাধীন হয়ে মনোবিবেক বৃদ্ধি করতে পারে। ছাত্রিদের জন্য
            একটি সাধারণ কক্ষা এবং অফিস কক্ষও বিদ্যালয়ে রয়েছে।
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
