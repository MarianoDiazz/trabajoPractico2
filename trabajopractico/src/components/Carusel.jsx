import Carousel from 'react-bootstrap/Carousel';

function Carusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="carusel-img" >
        <img
          className="d-block w-100 oswald"
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="titulo-carusel">Pizzita rica</h2>
          <p className="text-light btn btn-dark d-block">Pruebe nuestra pizzita rica.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carusel-img">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2 className="titulo-carusel">Elaboradas por Castrito</h2>
          <p className="text-light btn btn-dark d-block">Y su pareja.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carusel-img">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 className="titulo-carusel">Cla alta pizzita</h2>
          <p className="text-light btn btn-dark d-block">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;