import "./footer_main.css";
import Logo from "../../Assets/design.png";
import fb_icon from "../../Assets/fb-icon.png";
import instagram_icon from "../../Assets/instagram-icon.png";
import linkedin_icon from "../../Assets/linkedin-icon.png";

const Footer = () => {
  return (
    <footer className="footer_parent">
      <div className="footer_title">
        <h1>SpaceUP</h1>
        <h1>Cusat</h1>
        <p>Contact us by mail</p>
      </div>

      <form className="footer_email">
        <input
          type="text"
          className="footer_text"
          placeholder="Write your email"
        />
        <button className="footer_btn">Go to the moon</button>
      </form>
      <img src={Logo} className="footer_design" alt="design" />
      <div className="footer_icons">
        <img src={fb_icon} alt="fb_icon" />
        <img src={instagram_icon} alt="instagram_icon" />
        <img src={linkedin_icon} alt="linkedin_icon" />
      </div>
    </footer>
  );
};

export default Footer;
