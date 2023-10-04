const Persons = () => {
  return (
    <div className="w-full">
      <div>
        <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500 mb-2">
          <h1 className="text-xl font-bold">প্রধান শিক্ষক</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              className="w-52 h-60"
              src={
                "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg"
              }
              alt="head-teacher"
            />
          </div>
          <p className="font-bold text-xl text-center my-2">
            প্রফেসর মোঃ জহির উদ্দিন
          </p>
        </div>
      </div>
      <div>
        <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500 mb-2">
          <h1 className="text-xl font-bold">সভাপতি</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              className="w-52 h-60"
              src={
                "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg"
              }
              alt="head-teacher"
            />
          </div>
          <p className="font-bold text-xl text-center my-2">
            প্রফেসর মোঃ জহির উদ্দিন
          </p>
        </div>
      </div>
    </div>
  );
};

export default Persons;
