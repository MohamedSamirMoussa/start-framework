import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Nav/Nav";

const About = () => {
  return (
    <> 
    <Nav />
      <div  className="vh-100 py-5 d-flex justify-content-center align-items-center" id="about">
        <div className="container py-5">
          <h3 className="text-white text-uppercase text-center">about component</h3>
          <div className="lines d-flex justify-content-center align-items-center py-3">
            <div className="line mx-2"></div>
            <FontAwesomeIcon className="text-white fa-xl" icon={faStar} />
            <div className="line mx-2"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
