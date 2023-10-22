import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import Typical from "react-typical";

function HomeCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const { t } = useTranslation();

  return (
    <div className="relative md:w-[95vw]  w-[90vw] mx-auto">
      <Slider autoplay={true} {...settings}>
        <div className="relative h-[75vh] w-[100vw] bg-[url('/src/assets/institute.jpg')] bg-cover bg-no-repeat">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="h-full w-full flex  md:p-20 items-center">
              <div>
                <h1 className="text-5xl text-white font-bold pl-5">
                  {t("wlc")}
                </h1>
                <div className="text-5xl md:text-7xl text-white p-5 rounded">
                  <Typical
                    steps={[1500, t("name"), 1000, "", 1000, "", 500]}
                    loop={Infinity}
                  />
                </div>
                <button className="btn btn-primary text-white ml-5">
                  আমাদের সম্পর্কে
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[75vh] w-[100vw] bg-[url('/src/assets/student.jpg')] bg-cover bg-no-repeat">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="h-full w-full flex  md:p-20 items-center">
              <div>
                <h1 className="text-5xl text-white font-bold pl-5">
                  {t("wlc")}
                </h1>
                <div className="text-5xl md:text-7xl text-white p-5 rounded">
                  <Typical
                    steps={[1500, t("name"), 1000, "", 1000, "", 500]}
                    loop={Infinity}
                  />
                </div>
                <button className="btn btn-primary text-white ml-5">
                  আমাদের সম্পর্কে
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeCarousel;
