import "./carousel.css";
import { Carousel } from "react-bootstrap";
import img5 from "../images/img5.jpeg";
import img6 from "../images/img6.jpeg";
import img7 from "../images/img7.jpeg";

function CarouselFunc() {
  return (
    <div className="carousel">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-item"
            src={img5}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-item"
            src={img6}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-item"
            src={img7}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFunc;
