import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
export default function Header() {
  return (
    <>
      <header className="backdrop">
        <article className="content-header container">
          <div className="img-size center">
            <img src={logo} alt="magdalenaLogo" />
          </div>
          <div className="img-size center">
            <img src={banner} alt="magdalenaLogo" />
          </div>
        </article>
      </header>
    </>
  );
}
