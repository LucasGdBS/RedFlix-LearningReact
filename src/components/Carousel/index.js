import Slider from "react-slick";
import "./carousel.css";

function Carousel({ children }){
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        variableHeight: true,
        // slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;