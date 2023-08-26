const HeadTeachers = () => {
  const teachers = [
    {
      name: "মো: রফিকুল ইসলাম",
      designation: "প্রধান শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "মো: আইয়ুব হোসেন",
      designation: "সহকারী প্রধান শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl text-center text-primary text-bold my-5 font-bold">
        প্রধান শিক্ষক ও সহকারী প্রধান শিক্ষক
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
        {teachers?.map((teacher, index) => (
          <div
            key={index}
            className="card border-2 m-5 bg-base-100 shadow-xl p-5"
          >
            <div className="card-body">
              <div className="w-full flex justify-center">
                <div className="avatar">
                  <div className="w-32 rounded-xl">
                    <img src={teacher?.imageUrl} />
                  </div>
                </div>
              </div>
              <h3 className="my-2 font-bold text-center text-2xl">
                {teacher?.designation}
              </h3>
              <h3 className="my-2 font-semibold text-center text-xl">
                {teacher?.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadTeachers;
