const AllNews = () => {
  const news = [
    {
      _id: 1,
      name: "বার্ষিক পরীক্ষার ফলাফল করা হয়েছে",
      date: "০১/০১/২০২৩",
    },
    {
      _id: 2,
      name: "বিজ্ঞান ও প্রযুক্তি মেলার আয়োজন করা হয়েছে",
      date: "০১/১২/২০২৩",
    },
    {
      _id: 3,
      name: "বৃক্ষরোপণ কমসূচি পালন করা হয়েছে",
      date: "০১/১২/২০২৩",
    },
    {
      _id: 4,
      name: "প্রতিষ্ঠানে খেলাধুলার আয়োজন করা হয়েছে",
      date: "০১/১২/২০২৩",
    },
    {
      _id: 5,
      name: "নতুন বছরের বই বিতরণ করা হয়েছে",
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
        {news?.map((item) => (
          <div className="m-4 flex items-center" key={item._id}>
            <div>
              <p className="font-bold text-primary bg-gray-100 p-1">
                {item?.date?.split("/")[0]}-{item?.date?.split("/")[1]}
              </p>
              <p className="bg-primary text-white font-bold p-1">
                {item?.date?.split("/")[2]}
              </p>
            </div>
            <p className="font-semibold text-green-700 mx-2">{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
