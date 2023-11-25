import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/gallery/1.jpg";
import img2 from "../../assets/gallery/2.jpg";
import img3 from "../../assets/gallery/3.jpg";
import img4 from "../../assets/gallery/4.jpg";
import img5 from "../../assets/gallery/5.jpg";
import img6 from "../../assets/gallery/6.jpg";
import img7 from "../../assets/gallery/7.jpg";
import img8 from "../../assets/gallery/8.jpg";
import img9 from "../../assets/gallery/9.jpg";

const PhotoGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    touchMove: true,
    arrows: true,
  };

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="mb-10">
      <Slider {...settings}>
        {images?.map((image, index) => (
          <div key={index} className="my-5">
            <img
              src={image}
              className="w-full md:max-w-lg  mx-auto rounded-lg shadow-md h-96"
            />
            <h1 className="text-center font-bold text-4xl mt-5">
              Our school activities
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoGallery;
