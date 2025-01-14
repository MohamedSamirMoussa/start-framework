import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <section className="py-5" id="footer">
        <div className="container">
          <div className="row text-center gy-5">
            <div className="col-md-4 text-white">
              <h4>LOCATION</h4>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-white">
              <h4>AROUND THE WEB</h4>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </li>
                <li>
                <FontAwesomeIcon icon={faGlobe} />
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-white">
              <h4>LOCATION</h4>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3" id="foot">
        <div className="container">
            <p className="text-white text-center m-0">Copyright © Your Website 2021</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
