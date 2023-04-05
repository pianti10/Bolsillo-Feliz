import axios from "../../redux/axios.js";
import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
import "./cart.css";


export default function MercadoP() {
  const stateUser = useSelector((state) => state.bolsilloPersist);
  //console.log(stateUser)
  let id = stateUser.id;
  const handlePayment = async () => {
    const datos = await axios.post("/market/payment", { id });
    // console.log(datos.data.response.body.sandbox_init_point)
    window.location.href = datos.data.response.body.sandbox_init_point;
    console.log(id);
  };

  return (
    <>
      <div className="container-mp">
        <div className="container-txt-mp">
          <h3>Solo queda un paso para que puedas publicar tus productos</h3>
          <p>
            Para formar parte del grupo de mercados de nuestra aplicación
            "Bolsillo Feliz", y obtener mayor exposición entre los mercados,
            deberá abonar una suscripción anual.
          </p>
          <button onClick={handlePayment}>Pagar membresia</button>
        </div>
        <img
          className="foto-mp"
          src="https://res.cloudinary.com/dhgvx0k7m/image/upload/v1680195927/logos%20e%20imagenes/kbp243qvw2ld1stk2ixq_pljqdh.jpg"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
}
