const Events = () => {
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
      {events?.map((item) => (
        <div className="m-4 flex items-center" key={item._id}>
          <div>
            <p className="font-bold text-red-500 bg-gray-100 p-1">
              {item?.date?.split("/")[0]}-{item?.date?.split("/")[1]}
            </p>
            <p className="bg-red-500 text-white font-bold p-1">
              {item?.date?.split("/")[2]}
            </p>
          </div>
          <div>
            <p className="font-semibold text-red-700 mx-2 line-through">
              {item?.name}
            </p>
            <p className="font-bold  mx-2">Event Date: {item?.eventDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
