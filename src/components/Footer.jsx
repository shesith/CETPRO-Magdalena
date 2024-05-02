export default function Footer() {
  return (
    <>
      <footer style={{ position: "relative" }}>
        <article className="backdrop-footer section">
          <div className="container container-info-footer">
            <div className="content-info">
              <h2>Aprendizajes</h2>
              <p>
                Desde la comodidad de tu casa hasta programas modulares en
                nuestras salas de clase completamente equipadas, el ambiente del
                CETPRO traerá el amor por el profesionalismo al trabajo.
              </p>
            </div>
            <div className="container-matricula">
              <h3>Matrícula Gratis</h3>
              <div className="container-phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <h4> 01-263-1201</h4>
              </div>
            </div>
          </div>
        </article>
        <div className="background-color"></div>
      </footer>
    </>
  );
}
