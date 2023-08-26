const News = () => {
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
      {news?.map((item) => (
        <div className="m-4 flex items-center" key={item._id}>
          <div>
            <p className="font-bold text-red-500 bg-gray-100 p-1">
              {item?.date?.split("/")[0]}-{item?.date?.split("/")[1]}
            </p>
            <p className="bg-red-500 text-white font-bold p-1">
              {item?.date?.split("/")[2]}
            </p>
          </div>
          <p className="font-semibold text-red-700 mx-2">{item?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
