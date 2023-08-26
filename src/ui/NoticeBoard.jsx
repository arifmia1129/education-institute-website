import { useState } from "react";
import Notices from "./Notices";
import News from "./News";
import Events from "./Events";

const NoticeBoard = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const inactiveClass =
    "border-2 text-primary text-center p-2 font-bold curson-pointer";
  const activeClass =
    "border-2 border-t-primary border-b-0 text-primary text-center p-2 font-bold curson-pointer";
  return (
    <div className="md:w-[45vw] w-[90vw] border rounded-lg shadow-lg m-10 px-10">
      <div className="m-10 grid grid-cols-1 md:grid-cols-3 ">
        <div
          onClick={() => setCurrentTab(1)}
          className={currentTab === 1 ? activeClass : inactiveClass}
        >
          <p>নোটিশ</p>
        </div>
        <div
          onClick={() => setCurrentTab(2)}
          className={currentTab === 2 ? activeClass : inactiveClass}
        >
          <p>নিউজ</p>
        </div>
        <div
          onClick={() => setCurrentTab(3)}
          className={currentTab === 3 ? activeClass : inactiveClass}
        >
          <p>ইভেন্ট</p>
        </div>
      </div>
      {currentTab === 1 && <Notices />}
      {currentTab === 2 && <News />}
      {currentTab === 3 && <Events />}
    </div>
  );
};

export default NoticeBoard;
