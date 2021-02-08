import { Carousel } from "react-bootstrap";

export default function Carrousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://corazonurbano.com/wp-content/uploads/2020/02/fast-and-furious-9.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fast and furious 9</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.blogs.es/f9d649/mortal-kombay/1366_2000.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Mortal Combat</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.blogs.es/186ad3/depp/1366_2000.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Animales Fantásticos 3</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
