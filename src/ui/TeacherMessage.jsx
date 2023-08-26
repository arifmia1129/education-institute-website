import Slider from "react-slick";
import HeadTeacherMessage from "./HeadTeacherMessage";
import AssistantHeadTeacherMessage from "./AssistantHeadTeacherMessage";

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
    <Slider className="md:w-[45vw] m-10 w-full" autoplay={true} {...settings}>
      <HeadTeacherMessage />
      <AssistantHeadTeacherMessage />
    </Slider>
  );
}

export default TeacherMessage;
