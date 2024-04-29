import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop6.css";

const Desktop6 = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/desktop-90");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Desktop - 82" to the project
  }, []);

  return (
    <div className="desktop-120">
      <div className="hero6">
        <img
          className="ad-placeholder-icon5"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="content10">
          <div className="content-child11" />
          <div className="group-parent5">
            <div className="group-parent6">
              <div className="tell-us-about-yourself-parent">
                <div className="tell-us-about7">Tell us about yourself</div>
                <div className="share-you-name1">
                  Share you name, email and educational background
                </div>
              </div>
              <div className="group-child14" />
            </div>
            <Button
              className="button-primary1"
              disableElevation={true}
              color="primary"
              variant="contained"
              sx={{ borderRadius: "0px 0px 0px 0px", width: 346, height: 56 }}
              onClick={onButtonPrimaryClick}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="footer6">
        <div className="parent11">
          <img className="icon16" alt="" src="/1.svg" />
          <img className="icon17" alt="" src="/2.svg" />
        </div>
        <div className="cevah-parent4">
          <b className="cevah12">CEVAH</b>
          <div className="frame-child10" />
          <div className="frame-child11" />
        </div>
        <div className="lorem-ipsum-dolor7">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons18" alt="" src="/social-icons.svg" />
        <img className="social-icons19" alt="" src="/social-icons1.svg" />
        <img className="social-icons20" alt="" src="/social-icons2.svg" />
        <div className="contact-us6">Contact Us</div>
        <div className="support6">Support</div>
        <div className="hellocevahgmailcom-parent4">
          <div className="hellocevahgmailcom6">hellocevah@gmail.com</div>
          <img className="envelope-icon6" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use6">Terms of Use</div>
        <div className="privacy-policy6">Privacy Policy</div>
        <div className="parent12">
          <div className="div8">+91 9922883377</div>
          <img className="vector-icon27" alt="" src="/vector.svg" />
        </div>
        <div className="faqs6">FAQs</div>
      </div>
      <div className="header6">
        <div className="content11">
          <div className="logo6" onClick={onLogoContainerClick}>
            <div className="icon18">
              <div className="icon-child10" />
              <div className="icon-child11" />
            </div>
            <b className="cevah13">CEVAH</b>
          </div>
          <div className="language6">
            <img className="globe-icon6" alt="" src="/globe.svg" />
            <div className="english6">English</div>
          </div>
          <div className="navigation6" />
        </div>
        <div className="login6">
          <div className="jd6">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop6;
