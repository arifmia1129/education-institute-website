const AssistanceTeachers = () => {
  const teachers = [
    {
      name: "ফারিদা আহমেদ",
      designation: "গণিত শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "রহিম খান",
      designation: "বাংলা শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "তাসনীম ইসলাম",
      designation: "প্রাণিবিজ্ঞান শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "আব্দুল করিম",
      designation: "ইংরেজি শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "নাসির উদ্দিন",
      designation: "সামাজিক বিজ্ঞান শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "আফরোজা রহমান",
      designation: "ভূগোল শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "কামরুল ইসলাম",
      designation: "পদার্থবিজ্ঞান শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "সাবিনা চৌধুরী",
      designation: "কৃষি শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "নাজমুল হক",
      designation: "গর্ত শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "আরিফা ইসলাম",
      designation: "আইসি টি শিক্ষক",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl text-center text-primary text-bold my-5 font-bold">
        সহকারী শিক্ষক বৃন্দ
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-5">
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

export default AssistanceTeachers;
