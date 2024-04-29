import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop4.css";

const Desktop4 = () => {
  const navigate = useNavigate();

  const onFrameInput1Click = useCallback(() => {
    // Please sync "Desktop - 97" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-92");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-94");
  }, [navigate]);

  const onSkipTextClick = useCallback(() => {
    navigate("/desktop-92");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Desktop - 82" to the project
  }, []);

  return (
    <div className="desktop-95">
      <div className="hero4">
        <img
          className="ad-placeholder-icon3"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="content6">
          <div className="content-child6" />
          <div className="tell-us-about4">Tell us about yourself</div>
          <div className="add-your-educational3">
            Add your educational background. Add upto 3 degrees.
          </div>
          <TextField
            className="content-child7"
            color="primary"
            label="Enter College Name"
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          />
          <TextField
            className="content-child8"
            color="primary"
            label="Enter Degree Name "
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
            onClick={onFrameInput1Click}
          />
          <div className="group-parent2">
            <div className="rectangle-wrapper1">
              <div className="group-child12" />
            </div>
            <div className="group-child13" />
          </div>
          <Button
            className="content-child9"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
            onClick={onFrameButtonClick}
          >
            Continue
          </Button>
          <div className="back4" onClick={onBackTextClick}>
            Back
          </div>
          <div className="education-3-optional">Education 3 (Optional)</div>
          <div className="skip" onClick={onSkipTextClick}>
            Skip
          </div>
        </div>
      </div>
      <div className="footer4">
        <div className="parent5">
          <img className="icon12" alt="" src="/1.svg" />
          <img className="icon13" alt="" src="/2.svg" />
        </div>
        <div className="cevah-parent2">
          <b className="cevah8">CEVAH</b>
          <div className="frame-child5" />
          <div className="frame-child6" />
        </div>
        <div className="lorem-ipsum-dolor5">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons12" alt="" src="/social-icons.svg" />
        <img className="social-icons13" alt="" src="/social-icons1.svg" />
        <img className="social-icons14" alt="" src="/social-icons2.svg" />
        <div className="contact-us4">Contact Us</div>
        <div className="support4">Support</div>
        <div className="hellocevahgmailcom-parent2">
          <div className="hellocevahgmailcom4">hellocevah@gmail.com</div>
          <img className="envelope-icon4" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use4">Terms of Use</div>
        <div className="privacy-policy4">Privacy Policy</div>
        <div className="parent6">
          <div className="div4">+91 9922883377</div>
          <img className="vector-icon4" alt="" src="/vector.svg" />
        </div>
        <div className="faqs4">FAQs</div>
      </div>
      <div className="header4">
        <div className="content7">
          <div className="logo4" onClick={onLogoContainerClick}>
            <div className="icon14">
              <div className="icon-child6" />
              <div className="icon-child7" />
            </div>
            <b className="cevah9">CEVAH</b>
          </div>
          <div className="language4">
            <img className="globe-icon4" alt="" src="/globe.svg" />
            <div className="english4">English</div>
          </div>
          <div className="navigation4" />
        </div>
        <div className="login4">
          <div className="jd4">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop4;
