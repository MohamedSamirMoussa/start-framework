import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Nav/Nav";
import img4 from "../../../src/assets/img/avataaars.svg"
const Home = () => {
  return (
    <>
      <Nav />
      <section className="py-5" id="home">
        <div className="container py-5">
          <div className="info d-flex justify-content-center align-items-center flex-column">
            <figure>
            <img
              src={img4}
              className="w-100 d-block"
              alt="home avatar"
            />
            <figcaption className="text-center">
                <p className="m-0 pt-3 display-4 text-uppercase text-white fw-bold">Start Framework</p>
            </figcaption>
            </figure>
            <div className="lines d-flex align-items-center py-3">
              <div className="line mx-2"></div>
              <FontAwesomeIcon className="text-white fa-xl" icon={faStar} />
              <div className="line mx-2"></div>
            </div>
            <p className="text-white">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
