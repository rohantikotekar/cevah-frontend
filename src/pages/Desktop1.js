import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Desktop - 104" to the project
  }, []);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-95");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Desktop - 82" to the project
  }, []);

  return (
    <div className="desktop-92">
      <div className="hero1">
        <img
          className="screenshot-2024-03-19-at-1228"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="ad-placeholder">
          <img
            className="placeholder-graphics-big"
            alt=""
            src="/placeholder-graphics-big.svg"
          />
          <div className="place-holder-text">
            <b className="advertisement">{`ADVERTISEMENT `}</b>
            <div className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
          </div>
          <img
            className="placeholder-graphics-small"
            alt=""
            src="/placeholder-graphics-small.svg"
          />
        </div>
      </div>
      <div className="footer1">
        <div className="container">
          <img className="icon3" alt="" src="/1.svg" />
          <img className="icon4" alt="" src="/2.svg" />
        </div>
        <div className="cevah-group">
          <b className="cevah2">CEVAH</b>
          <div className="frame-inner" />
          <div className="rectangle-div" />
        </div>
        <div className="lorem-ipsum-dolor2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons3" alt="" src="/social-icons.svg" />
        <img className="social-icons4" alt="" src="/social-icons1.svg" />
        <img className="social-icons5" alt="" src="/social-icons2.svg" />
        <div className="contact-us1">Contact Us</div>
        <div className="support1">Support</div>
        <div className="hellocevahgmailcom-group">
          <div className="hellocevahgmailcom1">hellocevah@gmail.com</div>
          <img className="envelope-icon1" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use1">Terms of Use</div>
        <div className="privacy-policy1">Privacy Policy</div>
        <div className="frame-div">
          <div className="div1">+91 9922883377</div>
          <img className="vector-icon1" alt="" src="/vector.svg" />
        </div>
        <div className="faqs1">FAQs</div>
      </div>
      <div className="rectangle-group">
        <div className="group-child1" />
        <div className="tell-us-about1">Tell us about yourself</div>
        <div className="add-your-educational">
          Add your educational background. Add upto 3 degrees.
        </div>
        <TextField
          className="group-child2"
          color="primary"
          label="M.D. Cardiology, AIIMS Jodhpur"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
        />
        <TextField
          className="group-child3"
          color="primary"
          label="MBBS, AIIMS Delhi"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
        />
        <TextField
          className="group-child4"
          color="primary"
          label="Education 3(Optional)"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
        />
        <div className="group-container">
          <div className="rectangle-wrapper">
            <div className="group-child5" />
          </div>
          <div className="group-child6" />
        </div>
        <Button
          className="group-child7"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
          onClick={onFrameButtonClick}
        >
          Continue
        </Button>
        <div className="back1" onClick={onBackTextClick}>
          Back
        </div>
        <div className="education-1">Education 1</div>
        <div className="education-2">Education 2</div>
        <div className="education-3">Education 3</div>
      </div>
      <div className="header1">
        <div className="content1">
          <div className="logo1" onClick={onLogoContainerClick}>
            <div className="icon5">
              <div className="icon-inner" />
              <div className="icon-child1" />
            </div>
            <b className="cevah3">CEVAH</b>
          </div>
          <div className="language1">
            <img className="globe-icon1" alt="" src="/globe.svg" />
            <div className="english1">English</div>
          </div>
          <div className="navigation1" />
        </div>
        <div className="login1">
          <div className="jd1">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
