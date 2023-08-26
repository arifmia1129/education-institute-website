const StudentDetails = () => {
  return (
    <div className=" my-10 ">
      <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500">
        <h1 className="text-xl font-bold">শিক্ষার্থীর তথ্য</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-start place-items-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">শ্রেণি নির্বাচন করুন</span>
          </label>
          <select className="select select-bordered">
            <option>১ম</option>
            <option>২য়</option>
            <option>৩য়</option>
            <option>৪র্থ</option>
            <option>৫ম</option>
            <option>৬ষ্ঠ</option>
            <option>৭ম</option>
            <option>৮ম</option>
            <option>৯ম</option>
            <option>১০</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">রোল নম্বর লিখুন</span>
          </label>
          <input
            type="text"
            placeholder="রোল লিখুন"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary text-white">অনুসন্ধান</button>
      </div>
    </div>
  );
};

export default StudentDetails;
