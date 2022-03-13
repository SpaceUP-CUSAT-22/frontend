import "./About.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const About = () => {
  return (
    <div className="about_parent">
      <div className="about_text">
        <h1>About</h1>
        <p>
          IRES SEDS CUSAT is a community of undergraduate students from CUSAT
          who have come together to make opportunities out of the possibilities
          that are beyond the perimeters of earth. We aim to take knowledge down
          the path of imagination. To uphold this vision and idea of ours we
          come together as a community to administer seminars, forums, and
          outreach programs to break you f rom the monotonous way of learning.
          We present the battle of minds both at the national and international
          level for college and school students and assist them in networking
          within space industries. Here memories are created with dreams not
          dependent on the stars falling in the night sky. We bring to you our
          unconference SPACEUP CUSAT 2022.
        </p>
      </div>
      <div className="carousel">
        <Carousel responsive={responsive}>
          <div>
            <img
              className="d-block w-100"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
