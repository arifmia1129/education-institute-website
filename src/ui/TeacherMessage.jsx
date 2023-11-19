import Slider from "react-slick";
import HeadTeacherMessage from "./HeadTeacherMessage";
import PresidentMessage from "./PresidentMessage";

function TeacherMessage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider className="w-full my-10" autoplay={true} {...settings}>
      <HeadTeacherMessage />
      <PresidentMessage />
    </Slider>
  );
}

export default TeacherMessage;
