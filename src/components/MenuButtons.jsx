import { NavLink } from "react-router-dom";
import scrollTop from "../utilities/scrollTop";

export default function MenuButtons() {
  return (
    <>
      <section className="vh-100 backdrop">
        <article className="section container-main-btn">
          <div className="container container-buttons vh-100">
            <div>
              <NavLink onClick={scrollTop} to="/carreras">
                <button className="btn">CARRERAS</button>
              </NavLink>
            </div>
            {/* <div>
              <NavLink onClick={scrollTop} to="/registro">
                <button className="btn">MATRÍCULA</button>
              </NavLink>
            </div> */}
          </div>
        </article>
      </section>
    </>
  );
}
