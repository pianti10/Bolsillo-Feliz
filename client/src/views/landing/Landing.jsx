import "./landing.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <div className="landing-container">
      <div className="landing-0">
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
          src="https://res.cloudinary.com/dhgvx0k7m/image/upload/v1680711244/logos%20e%20imagenes/imagen_1_kylfvb.webp"
          alt=""
        />
        <div className="text-land-0">
          <h2>Queres ahorrar hasta el último peso?</h2>
          <br />
          <p>te vamos a contar como es posible con bolsillo feliz</p>
          <a href="#landing-1">
            <button>Siguiente</button>{" "}
          </a>{" "}
        </div>{" "}
      </div>
      <div id="landing-1">
        <div className="foto-landing-1">
          <div className="text-land-1">
            <h2>Elegí el producto que más te guste</h2>
            <br />
            <a href="#landing-3">
              <button>Siguiente</button>
            </a>
          </div>{" "}
          <img
            data-aos="fade-left"
            data-aos-duration="10" 
            data-aos-offset="500"
            src="https://res.cloudinary.com/dhgvx0k7m/image/upload/v1680711263/logos%20e%20imagenes/imagen_2_aovxck.png"
            alt=""
          />
        </div>
      </div>
      <div id="landing-3">
        <div className="foto-landing-3">
          <div className="text-land-3">
            <h2>
              Nosotros te decimos donde <br /> es mas barato
            </h2>
            <br />
            <a href="#landing-2">
              <button>Siguiente</button>
            </a>
          </div>{" "}
          <img
            data-aos="fade-up"
            data-aos-duration="10"
            data-aos-offset="500"
            src="https://res.cloudinary.com/dhgvx0k7m/image/upload/v1680711280/logos%20e%20imagenes/imagen_3_af3vjo.jpg"
            alt=""
          />
        </div>
      </div>
      <div id="landing-2">
        <div className="foto-landing-2">
          <img
            data-aos="fade-right"
            data-aos-duration="10"
            data-aos-offset="500"
            src="https://res.cloudinary.com/dhgvx0k7m/image/upload/v1680711298/logos%20e%20imagenes/imagen_4_lezqrn.png"
            alt=""
          />
          <div className="text-land-2">
            <h2>Ya podés empezar a Comparar</h2>
            <br />
            <a href="/home">
              <button>Estoy listo</button>
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Landing;
