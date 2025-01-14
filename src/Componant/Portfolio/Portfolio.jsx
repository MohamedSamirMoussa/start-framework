import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Nav/Nav";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import img from "../../../src/assets/img/poert1.png"
import img2 from "../../../src/assets/img/port2.png"
import img3 from "../../../src/assets/img/port3.png"
const Portfolio = () => {
  return (
    <>
      <Nav />
      <section className="py-5" id="port">
        <div className="container py-5">
          <div className="title text-center py-5">
            <h3 className="fs-1 fw-bold text-uppercase">portfolio component</h3>
            <div className="lines d-flex justify-content-center align-items-center py-3">
              <div className="line bg-black mx-2"></div>
              <FontAwesomeIcon className="fa-xl" icon={faStar} />
              <div className="line bg-black mx-2"></div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div
                className="group position-relative"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src={img}
                  className="w-100"
                  alt=""
                />
                <div className="overly d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fa-5x text-white" icon={faPlus} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="group position-relative"
                data-bs-toggle="modal"
                data-bs-target="#Modal"
              >
                <img
                  src={img2}
                  className="w-100"
                  alt=""
                />
                <div className="overly d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fa-5x text-white" icon={faPlus} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="group position-relative"
                data-bs-toggle="modal"
                data-bs-target="#Modal2"
              >
                <img
                  src={img3}
                  className="w-100"
                  alt=""
                />
                <div className="overly d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fa-5x text-white" icon={faPlus} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="group position-relative"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src={img}
                  className="w-100"
                  alt=""
                />
                <div className="overly d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fa-5x text-white" icon={faPlus} />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-bs-toggle="modal"
              data-bs-target="#Modal"
            >
              <div className="group position-relative">
                <img
                  src={img2}
                  className="w-100"
                  alt=""
                />
                <div className="overly d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fa-5x text-white" icon={faPlus} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="group position-relative"
                data-bs-toggle="modal"
                data-bs-target="#Modal2"
              >
                <img
                  src={img3}
                  className="w-100"
                  alt=""
                />
                <div className="overly d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fa-5x text-white" icon={faPlus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="bg-transparent">
              <img
                src={img}
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="Modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="bg-transparent">
              <img
                src={img2}
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="Modal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="bg-transparent">
              <img
                src={img3}
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
