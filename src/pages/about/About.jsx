const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        <div className="relative h-[30vh] mx-auto  w-[95vw] bg-[url('/src/assets/institute.jpg')] bg-cover bg-no-repeat">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="h-full w-full flex justify-center  md:p-20 items-center">
              <div>
                <h1 className="text-5xl text-white font-bold pl-5 text-center">
                  আমাদের সম্পর্কে
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="my-5">
        কোচাসার উচ্চ বিদ্যালয়, যা ১৯৬২ সালে প্রতিষ্ঠিত হয়, একটি শ্রেষ্ঠ শিক্ষা
        প্রতিষ্ঠানের রূপে অত্যন্ত গর্বিত। এই বিদ্যালয়ে প্রায় ৮০০ শিক্ষার্থী
        তাদের পাঠ্যক্রম পূর্ণ করছেন। এখানে শ্রেণি ৬ থেকে ১০ পর্যন্ত পাঠ পাচ্ছে
        এবং ৯ এবং ১০ শ্রেণির জন্য বিজ্ঞান এবং শিল্প দুটি বিভাগ রয়েছে।
        বিদ্যালয়ে মোট ১৫ উপাধ্যায়ী কাজ করছেন, যার মধ্যে মুখ্য শিক্ষক মোঃ
        রফিকুল ইসলাম এবং উপ-মুখ্য শিক্ষক মোঃ আইয়ুব হোসেন অত্যন্ত প্রমুখ।
        বিদ্যালয়ে একটি সুন্দর খেলাধীন মাঠ আছে যেখানে শিক্ষার্থীরা খেলাধীন হয়ে
        মনোবিবেক বৃদ্ধি করতে পারে। ছাত্রিদের জন্য একটি সাধারণ কক্ষা এবং অফিস
        কক্ষও বিদ্যালয়ে রয়েছে।
      </p>
    </div>
  );
};

export default AboutUs;
