import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import helplineImg from "../../assets/helpline.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">আমাদের সেবা</span>
          <a className="link link-hover">হোম</a>
          <a className="link link-hover">একাডেমিক</a>
          <a className="link link-hover">নোটিশ</a>
          <a className="link link-hover">অফিস ও প্রশাসন</a>
        </div>
        <div>
          <span className="footer-title">গুরুত্বপূর্ণ লিংক</span>
          <a className="link link-hover">শিক্ষা মন্ত্রনালয়</a>
          <a className="link link-hover">শিক্ষা বোর্ড</a>
          <a className="link link-hover">জেলা প্রসাশক</a>
          <a className="link link-hover">অন্যান্য</a>
        </div>
        <div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe w-full"
                src="https://maps.google.com/maps?width=700&amp;height=500&amp;hl=en&amp;q=Kochashahar High School&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
          </div>
          <div className="flex items-center">
            <ImLocation size={25} color="green" />
            <p className="font-bold mx-2">
              ঠিকানা: কোচাশহর দ্বি-মুখী উচ্চ বিদ্যালয়, কোচাশহর-৫৭৪০,
              গোবিন্দগঞ্জ, গাইবান্ধা
            </p>
          </div>
          <div className="flex items-center">
            <BsTelephoneFill size={22} color="green" />
            <p className="font-bold mx-2">মোবাইল: 01849676331</p>
          </div>
          <div className="flex items-center">
            <MdEmail size={22} color="green" />
            <p className="font-bold mx-2">ইমেইল: arif.vtti@gmail.com</p>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            <span className="font-bold">
              {" "}
              কোচাশহর দ্বি-মুখী উচ্চ বিদ্যালয়
            </span>{" "}
            <br />
            শিক্ষার জন্য এসো, সেবার জন্য বেরিয়ে যাও
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <img className="w-full h-fit" src={helplineImg} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
