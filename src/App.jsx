import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import Index from "./pages/router";
function App() {
  return (
    <div className="mx-3 md:mx-5 relative">
      <Index />
      <div className="fixed right-0 bottom-1/3 transform -translate-y-1/2">
        <button
          onClick={() => window.my_modal_5.showModal()}
          className="bg-primary w-14 hover:w-44 h-12 rounded-l-full flex justify-evenly  items-center group transition-width duration-500 overflow-hidden"
        >
          <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <BiSolidPhoneCall size={25} className="text-primary" />
          </div>
          <p className="hidden group-hover:block text-white h-5 overflow-hidden">
            Click for Help
          </p>
        </button>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <form method="dialog" className="modal-box md:py-10 py-0">
          <h3 className="text-lg text-center text-green-600">
            Click for Help:
          </h3>
          <p className="pt-4 pb-1 text-center">01849676331</p>
          <p className="text-center py-1">Open (09:00 AM to 05:00 PM)</p>
          <p className="text-center py-1">Except Government Holidays</p>
          <div className="modal-action w-full flex justify-center">
            <button className="btn bg-blue-500 text-white w-24">OK</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default App;
