import arte from "../assets/ciclo-basico-1.png";
import cap from "../assets/cap.png";
import cap1 from "../assets/cap1.png";
import { NavLink } from "react-router-dom";
import scrollTop from "../utilities/scrollTop";
export default function Craft() {
  return (
    <section className="backdrop">
      <article className="container">
        <div className="content-img-craft">
          <img src={arte} alt="artesania" />
        </div>
        <div>
          <h2 className="blue">Artesanía y Manualidades</h2>
          <h4>COMPONENTES DEL PLAN DE ESTUDIOS</h4>
          <h5>Formación Específica</h5>
          <div className="container-info-craft">
            <p>
              Este componente, desarrolla las capacidades específicas del
              módulo, que desarrollan potencialidades: cognitivas (analiza,
              infiere, identifica, organiza y otras) motoras que tienen que ver
              con el desarrollo de habilidades y destrezas (acción) y afectivas,
              mediante los valores y actitudes que contribuyan a promover una
              cultura de valores éticos, morales para el desarrollo humano
              (respeto, responsabilidad, trabajo en equipo).
            </p>
            <p>
              La formación específica, se logra con los aprendizajes
              específicos, que tiene por finalidad desarrollar las capacidades
              específicas del módulo ocupacional. Para organizar la formación
              específica, se tomará como referente el Catálogo Nacional de
              Títulos y Certificaciones, documento donde se encuentran los
              requerimientos del sector productivo y que la institución
              educativa tiene que contextualizar a las posibilidades del centro
              de formación y al avance de la ciencia y la tecnología.
            </p>
            <p>
              La formación específica, del módulo ocupacional se operativiza
              mediante la aplicación de las siguientes capacidades:
            </p>
            <ul>
              <li>
                Gestión de procesos, son capacidades para investigar e
                identificar necesidades del mercado y oportunidades de trabajo,
                planificar, organizar y realizar los procesos de producción,
                controlar la calidad y comercializar lo que se produce.
              </li>
              <li>
                Ejecución de procesos, que desarrolla capacidades y habilidades
                para operar las herramientas y máquinas para realizar los
                procesos de transformación de la materia prima y los recursos en
                un bien o servicio.
              </li>
            </ul>
            <h4>Formación Complementaria</h4>
            <p>
              Desarrollan capacidades de soporte para la formación específica,
              como proporcionar conocimientos científicos tecnológicos que
              sirven de soporte a la formación específica del módulo y al
              desarrollo de las capacidades emprendedoras y empresariales para
              que los egresados generen sus propios puestos de trabajo y
              capitalice las oportunidades de trabajo que brinda el mercado
              global. La Formación complementaria se desarrolla mediante la
              aplicación de capacidades de:
            </p>
            <p>
              Compresión y aplicación de tecnología, capacidad para aplicar las
              tecnologías para mejorar la calidad y proporcionar el valor
              agregado al producto, el emprendimiento, gestión empresarial y
              formación y orientación laboral, se desarrolla con los
              aprendizajes complementarios.
            </p>
            <p>
              Tanto los aprendizajes específicos como los complementarios
              contribuyen a desarrollar los aprendizajes laborales para lograr
              el desempeño profesional.
            </p>
            <h4>Práctica Pre Profesional </h4>
            <p>
              Tiene por finalidad complementar y consolidar la formación
              modular, tiene como objetivo consolidar las capacidades adquiridas
              en el módulo, así como ejercitar su desempeño en una situación
              real de trabajo, para integrarse al ámbito laboral, vinculadas a
              un sistema de relaciones laborales y organizacionales del trabajo.
            </p>
          </div>
          <h2 className="blue">Detalles de la Carrera:</h2>
          <div className="content-img-craft-2">
            <div>
              <img src={cap} alt="cursos" />
            </div>
            <div>
              <h2 className="blue">Horarios:</h2>
              <img src={cap1} alt="horarios" />
            </div>
          </div>
          <div className="container-btn-link">
            <NavLink className="btn-link" onClick={scrollTop} to="/registro">
              ¡Matrículate Ahora!
            </NavLink>
          </div>
        </div>
      </article>
    </section>
  );
}
