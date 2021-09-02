import Carousel from 'react-bootstrap/Carousel'

const CarouselModel = () => {

    return (
        <div className="carousel">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/sources-homepage/versions/ALPINE-LEGENDE-1.png"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/sources-homepage/A110/Alpine-A110-1.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/sources-homepage/versions/ALPINE-PURE-1.png"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        
    )
}

export default CarouselModel;