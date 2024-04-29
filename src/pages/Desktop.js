import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop.css";

const Desktop = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-93");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-120");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Desktop - 82" to the project
  }, []);

  return (
    <div className="desktop-90">
      <div className="hero">
        <img className="ad-placeholder-icon" alt="" src="/ad-placeholder.svg" />
        <div className="hero-child" />
        <div className="tell-us-about">Tell us about yourself</div>
        <div className="add-name-phone">
          Add Name, Phone number and Email ID
        </div>
        <TextField
          className="hero-item"
          color="primary"
          label="Phone Number"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
        />
        <TextField
          className="hero-inner"
          color="primary"
          label="Name"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
        />
        <TextField
          className="frame-textfield"
          color="primary"
          label="Email ID"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
        />
        <div className="group-parent">
          <div className="rectangle-parent">
            <div className="group-child" />
            <div className="group-item" />
          </div>
          <div className="group-inner" />
        </div>
        <Button
          className="frame-button"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
          onClick={onFrameButtonClick}
        >
          Continue
        </Button>
        <div className="back" onClick={onBackTextClick}>
          Back
        </div>
      </div>
      <div className="footer">
        <div className="parent">
          <img className="icon" alt="" src="/1.svg" />
          <img className="icon1" alt="" src="/2.svg" />
        </div>
        <div className="cevah-parent">
          <b className="cevah">CEVAH</b>
          <div className="frame-child" />
          <div className="frame-item" />
        </div>
        <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons" alt="" src="/social-icons.svg" />
        <img className="social-icons1" alt="" src="/social-icons1.svg" />
        <img className="social-icons2" alt="" src="/social-icons2.svg" />
        <div className="contact-us">Contact Us</div>
        <div className="support">Support</div>
        <div className="hellocevahgmailcom-parent">
          <div className="hellocevahgmailcom">hellocevah@gmail.com</div>
          <img className="envelope-icon" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use">Terms of Use</div>
        <div className="privacy-policy">Privacy Policy</div>
        <div className="group">
          <div className="div">+91 9922883377</div>
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
        <div className="faqs">FAQs</div>
      </div>
      <div className="header">
        <div className="content">
          <div className="logo" onClick={onLogoContainerClick}>
            <div className="icon2">
              <div className="icon-child" />
              <div className="icon-item" />
            </div>
            <b className="cevah1">CEVAH</b>
          </div>
          <div className="language">
            <img className="globe-icon" alt="" src="/globe.svg" />
            <div className="english">English</div>
          </div>
          <div className="navigation" />
        </div>
        <div className="login">
          <div className="jd">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
