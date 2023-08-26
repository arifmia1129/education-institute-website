const ManagingMembers = () => {
  const members = [
    {
      name: "আব্দুল্লাহ আল-মামুন",
      designation: "প্রেসিডেন্ট",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "রুবিনা খাতুন",
      designation: "সচিব",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "মোহাম্মদ কামাল",
      designation: "সদস্য",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "ফাহিমা হাসান",
      designation: "সদস্য",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "সাবিনা ইয়াসমিন",
      designation: "প্রেসিডেন্ট",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "তামিম আল মাহমুদ",
      designation: "সচিব",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "রেহানা খানম",
      designation: "সদস্য",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "জাকারিয়া আব্বাস",
      designation: "সদস্য",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
    {
      name: "মোহিব্বুল হক",
      designation: "প্রেসিডেন্ট",
      imageUrl:
        "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl text-center text-primary text-bold my-5 font-bold">
        ম্যানেজিং কমিটির সদস্য বৃন্দ
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-5">
        {members?.map((member, index) => (
          <div
            key={index}
            className="card border-2 m-5 bg-base-100 shadow-xl p-5"
          >
            <div className="card-body">
              <div className="w-full flex justify-center">
                <div className="avatar">
                  <div className="w-32 rounded-xl">
                    <img src={member?.imageUrl} />
                  </div>
                </div>
              </div>
              <h3 className="my-2 font-bold text-center text-2xl">
                {member?.designation}
              </h3>
              <h3 className="my-2 font-semibold text-center text-xl">
                {member?.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagingMembers;
