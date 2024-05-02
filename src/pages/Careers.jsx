import career1 from "../assets/1.png";
import career3 from "../assets/3.png";
import career4 from "../assets/4.png";
import career2 from "../assets/2.png";
import { NavLink } from "react-router-dom";
import scrollTop from "../utilities/scrollTop";

export default function Careers() {
  return (
    <>
      <section>
        <article
          className="background-careers section"
          style={{ position: "relative" }}
        >
          <div className="container container-info-footer">
            <h3>Carreras</h3>
          </div>
          <div className="background-color "></div>
        </article>
        <div className="backdrop">
          <h2>CARRERAS</h2>
        </div>
        <article className="container container-main-careers">
          <div className="container-career">
            <NavLink onClick={scrollTop} to="/artesania">
              <div>
                <img src={career1} alt="carrera 1" />
              </div>
            </NavLink>
            <div>
              <NavLink onClick={scrollTop} to="/artesania">
                <h4>Artesanía y Manualidades</h4>
              </NavLink>
              <ul className="list-text">
                <li>Decoración de Eventos y Manualidades</li>
                <li>Pirograbado </li>
                <li>Confección de piezas de joyería</li>
              </ul>
            </div>
          </div>
          <div className="container-career">
            <NavLink onClick={scrollTop} to="/computacion">
              <div>
                <img src={career2} alt="carrera 2" />
              </div>
            </NavLink>
            <div>
              <NavLink onClick={scrollTop} to="/computacion">
                <h4>Computación e Informática</h4>
              </NavLink>
              <ul className="list-text">
                <li>Ofimática</li>
                <li> Diseño Publicitario</li>
                <li> Diseño de Páginas Web Lenguajes de Programación</li>
                <li>
                  Operación de Base de Datos Operación <br /> en Redes de
                  Cómputo Digitación de Textos
                </li>
              </ul>
            </div>
          </div>
          <div className="container-career">
            <NavLink onClick={scrollTop} to="/estetica">
              <div>
                <img src={career3} alt="carrera 3" />
              </div>
            </NavLink>
            <div>
              <NavLink onClick={scrollTop} to="/computacion">
                <h4>Estética Personal</h4>
              </NavLink>
              <ul className="list-text">
                <li>Corte de Cabello</li>
                <li> Peinado </li>
                <li> Ondulación</li>
                <li>Tinte Directo</li>
                <li>Tratamiento Capilar</li>
              </ul>
            </div>
          </div>
          <div className="container-career">
            <NavLink onClick={scrollTop} to="/servicios">
              <div>
                <img src={career4} alt="carrera 4" />
              </div>
            </NavLink>

            <div>
              <NavLink onClick={scrollTop} to="/servicios">
                <h4>Servicios Personales y de Hogares</h4>
              </NavLink>
              <ul className="list-text">
                <li>Elaboración de productos de Pastelería</li>
                <li>Elaboración de productos de Panadería </li>
                <li>Técnicas Básicas de Cocina</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
