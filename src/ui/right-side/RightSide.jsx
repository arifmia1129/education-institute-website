import AllButton from "./AllButton";
import Helpline from "./Helpline";
import Persons from "./Persons";

const RightSide = () => {
  return (
    <div className="m-10 flex justify-center">
      <div>
        <Persons />
        <AllButton />
        {/* Bangla calendar */}
        <div className="flex justify-center">
          <iframe
            className="h-52 w-fit px-2"
            src="https://bengalicalendar.com/embed/index.php"
          />
        </div>
        <Helpline />
      </div>
    </div>
  );
};

export default RightSide;
