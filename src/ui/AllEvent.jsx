const AllEvent = () => {
  const events = [
    {
      _id: 1,
      name: "এসএসসি কৃতি শিক্ষার্থীদের সম্মাননা প্রদান",
      date: "০১/০১/২০২৩",
      eventDate: "০১-০১-২০২২",
    },
    {
      _id: 2,
      name: "জেএসসি কৃতি শিক্ষার্থীদের সম্মাননা প্রদান",
      date: "০১/১২/২০২৩",
      eventDate: "০১-০১-২০২২",
    },
    {
      _id: 3,
      name: "বিদায়ী শিক্ষকদের সম্মাননা প্রদান",
      date: "০১/১২/২০২৩",
      eventDate: "০১-০১-২০২২",
    },
    {
      _id: 4,
      name: "জেএসসি কৃতি শিক্ষার্থীদের সম্মাননা প্রদান",
      date: "০১/১২/২০২৩",
      eventDate: "০১-০১-২০২২",
    },
    {
      _id: 5,
      name: "বিদায়ী শিক্ষকদের সম্মাননা প্রদান",
      date: "০১/১২/২০২৩",
      eventDate: "০১-০১-২০২২",
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
                  সকল ইভেন্ট
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-start my-5">
          {events?.map((item) => (
            <div className="m-4 flex items-center" key={item._id}>
              <div>
                <p className="font-bold text-primary bg-gray-100 p-1">
                  {item?.date?.split("/")[0]}-{item?.date?.split("/")[1]}
                </p>
                <p className="bg-primary text-white font-bold p-1">
                  {item?.date?.split("/")[2]}
                </p>
              </div>
              <div>
                <p className="font-semibold text-green-700 mx-2">
                  {item?.name}
                </p>
                <p className="font-bold  mx-2">Event Date: {item?.eventDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvent;
