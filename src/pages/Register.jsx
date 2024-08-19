import FooterForm from "../components/FooterForm";
import Form from "../components/Form";
export default function Register() {
  return (
    <>
      <section>
        <article
          className="background-register section"
          style={{ position: "relative" }}
        >
          <div className="container container-info-footer">
            <h3>Matrícula</h3>
          </div>
          <div className="background-color "></div>
        </article>

        <div className="backdrop">
          <h2>FICHA MATRÍCULA</h2>
        </div>
        <div className="container px-6 py-6">
          <Form />
        </div>
      </section>
      <FooterForm />
    </>
  );
}
