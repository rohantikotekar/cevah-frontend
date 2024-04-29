import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop3.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onFrameInput1Click = useCallback(() => {
    // Please sync "Desktop - 97" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-95");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-93");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Desktop - 82" to the project
  }, []);

  return (
    <div className="desktop-94">
      <div className="hero3">
        <img
          className="ad-placeholder-icon2"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="content4">
          <div className="content-child2" />
          <div className="tell-us-about3">Tell us about yourself</div>
          <div className="add-your-educational2">
            Add your educational background. Add upto 3 degrees.
          </div>
          <TextField
            className="content-child3"
            color="primary"
            label="Enter College Name"
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          />
          <TextField
            className="content-child4"
            color="primary"
            label="Enter Degree Name "
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
            onClick={onFrameInput1Click}
          />
          <div className="group-parent1">
            <div className="rectangle-frame">
              <div className="group-child10" />
            </div>
            <div className="group-child11" />
          </div>
          <Button
            className="content-child5"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
            onClick={onFrameButtonClick}
          >
            Continue
          </Button>
          <div className="back3" onClick={onBackTextClick}>
            Back
          </div>
          <div className="education-21">Education 2*</div>
        </div>
      </div>
      <div className="footer3">
        <div className="parent3">
          <img className="icon9" alt="" src="/1.svg" />
          <img className="icon10" alt="" src="/2.svg" />
        </div>
        <div className="cevah-parent1">
          <b className="cevah6">CEVAH</b>
          <div className="frame-child3" />
          <div className="frame-child4" />
        </div>
        <div className="lorem-ipsum-dolor4">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons9" alt="" src="/social-icons.svg" />
        <img className="social-icons10" alt="" src="/social-icons1.svg" />
        <img className="social-icons11" alt="" src="/social-icons2.svg" />
        <div className="contact-us3">Contact Us</div>
        <div className="support3">Support</div>
        <div className="hellocevahgmailcom-parent1">
          <div className="hellocevahgmailcom3">hellocevah@gmail.com</div>
          <img className="envelope-icon3" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use3">Terms of Use</div>
        <div className="privacy-policy3">Privacy Policy</div>
        <div className="parent4">
          <div className="div3">+91 9922883377</div>
          <img className="vector-icon3" alt="" src="/vector.svg" />
        </div>
        <div className="faqs3">FAQs</div>
      </div>
      <div className="header3">
        <div className="content5">
          <div className="logo3" onClick={onLogoContainerClick}>
            <div className="icon11">
              <div className="icon-child4" />
              <div className="icon-child5" />
            </div>
            <b className="cevah7">CEVAH</b>
          </div>
          <div className="language3">
            <img className="globe-icon3" alt="" src="/globe.svg" />
            <div className="english3">English</div>
          </div>
          <div className="navigation3" />
        </div>
        <div className="login3">
          <div className="jd3">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
