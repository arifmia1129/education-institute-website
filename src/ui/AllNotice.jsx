const AllNotice = () => {
  const notices = [
    {
      _id: 1,
      name: "২০২৩ সালের নতুন ভর্তির বিজ্ঞতি প্রকাশ।",
      date: "০১/০১/২০২৩",
    },
    {
      _id: 2,
      name: "শিক্ষক বদলি বিষয়ক",
      date: "০১/১২/২০২৩",
    },
    {
      _id: 3,
      name: "শিক্ষার্থীদের স্কুল ড্রেস সম্পর্কে অবহিতকরণ",
      date: "০১/১২/২০২৩",
    },
    {
      _id: 4,
      name: "২০২২ সালের বার্ষিক পরীক্ষার রুটিন প্রকাশ",
      date: "০১/১২/২০২৩",
    },
    {
      _id: 5,
      name: "স্কুল ছুটির বিজ্ঞতি",
      date: "০১/১২/২০২৩",
    },
  ];
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
                  সকল নোটিশ
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center my-5">
        {notices?.map((notice) => (
          <div className="m-4 flex items-center" key={notice._id}>
            <div>
              <p className="font-bold text-primary bg-gray-100 p-1">
                {notice?.date?.split("/")[0]}-{notice?.date?.split("/")[1]}
              </p>
              <p className="bg-primary text-white font-bold p-1">
                {notice?.date?.split("/")[2]}
              </p>
            </div>
            <p className="font-semibold text-green-700 mx-2">{notice?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNotice;
