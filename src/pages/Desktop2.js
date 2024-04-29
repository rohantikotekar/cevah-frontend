import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-94");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-90");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Desktop - 82" to the project
  }, []);

  return (
    <div className="desktop-93">
      <div className="hero2">
        <img
          className="ad-placeholder-icon1"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="content2">
          <div className="content-child" />
          <div className="tell-us-about2">Tell us about yourself</div>
          <div className="add-your-educational1">
            Add your educational background. Add upto 3 degrees.
          </div>
          <TextField
            className="content-item"
            color="primary"
            label="Enter College Name"
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          />
          <TextField
            className="content-inner"
            color="primary"
            label="Enter Degree Name "
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          />
          <div className="group-div">
            <div className="rectangle-container">
              <div className="group-child8" />
            </div>
            <div className="group-child9" />
          </div>
          <Button
            className="content-child1"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
            onClick={onFrameButtonClick}
          >
            Continue
          </Button>
          <div className="back2" onClick={onBackTextClick}>
            Back
          </div>
          <div className="education-11">Education 1*</div>
        </div>
      </div>
      <div className="footer2">
        <div className="parent1">
          <img className="icon6" alt="" src="/1.svg" />
          <img className="icon7" alt="" src="/2.svg" />
        </div>
        <div className="cevah-container">
          <b className="cevah4">CEVAH</b>
          <div className="frame-child1" />
          <div className="frame-child2" />
        </div>
        <div className="lorem-ipsum-dolor3">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons6" alt="" src="/social-icons.svg" />
        <img className="social-icons7" alt="" src="/social-icons1.svg" />
        <img className="social-icons8" alt="" src="/social-icons2.svg" />
        <div className="contact-us2">Contact Us</div>
        <div className="support2">Support</div>
        <div className="hellocevahgmailcom-container">
          <div className="hellocevahgmailcom2">hellocevah@gmail.com</div>
          <img className="envelope-icon2" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use2">Terms of Use</div>
        <div className="privacy-policy2">Privacy Policy</div>
        <div className="parent2">
          <div className="div2">+91 9922883377</div>
          <img className="vector-icon2" alt="" src="/vector.svg" />
        </div>
        <div className="faqs2">FAQs</div>
      </div>
      <div className="header2">
        <div className="content3">
          <div className="logo2" onClick={onLogoContainerClick}>
            <div className="icon8">
              <div className="icon-child2" />
              <div className="icon-child3" />
            </div>
            <b className="cevah5">CEVAH</b>
          </div>
          <div className="language2">
            <img className="globe-icon2" alt="" src="/globe.svg" />
            <div className="english2">English</div>
          </div>
          <div className="navigation2" />
        </div>
        <div className="login2">
          <div className="jd2">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
