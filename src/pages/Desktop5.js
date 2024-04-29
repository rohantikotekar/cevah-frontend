import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop5.css";

const Desktop5 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Desktop - 82" to the project
  }, []);

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/desktop-120");
  }, [navigate]);

  return (
    <div className="desktop-119">
      <section className="footer5">
        <div className="parent7">
          <a
            className="a"
            href={`https://play.google.com/store/apps?hl=en&gl=US`}
            target="_blank"
          >
            <img className="vector-icon5" alt="" src="/vector1.svg" />
            <img className="vector-icon6" alt="" src="/vector2.svg" />
            <img className="vector-icon7" alt="" src="/vector3.svg" />
            <img className="vector-icon8" alt="" src="/vector4.svg" />
            <img className="vector-icon9" alt="" src="/vector5.svg" />
            <img className="vector-icon10" alt="" src="/vector6.svg" />
            <img className="vector-icon11" alt="" src="/vector7.svg" />
            <img className="vector-icon12" alt="" src="/vector8.svg" />
            <img className="vector-icon13" alt="" src="/vector9.svg" />
            <img className="vector-icon14" alt="" src="/vector10.svg" />
            <img className="vector-icon15" alt="" src="/vector11.svg" />
            <img className="vector-icon16" alt="" src="/vector12.svg" />
            <img className="vector-icon17" alt="" src="/vector13.svg" />
          </a>
          <a
            className="a1"
            href="https://www.apple.com/app-store/"
            target="_blank"
          >
            <img className="vector-icon5" alt="" src="/vector1.svg" />
            <img className="vector-icon19" alt="" src="/vector14.svg" />
            <img className="vector-icon20" alt="" src="/vector15.svg" />
            <img className="vector-icon21" alt="" src="/vector16.svg" />
          </a>
        </div>
        <div className="cevah-parent3">
          <h2 className="cevah10">CEVAH</h2>
          <div className="frame-child7" />
          <div className="frame-child8" />
        </div>
        <div className="lorem-ipsum-dolor6">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons15" alt="" src="/social-icons.svg" />
        <a
          className="social-icons16"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <img className="vector-icon22" alt="" src="/vector17.svg" />
          <img className="vector-icon23" alt="" src="/vector18.svg" />
          <img className="vector-icon24" alt="" src="/vector19.svg" />
        </a>
        <a
          className="social-icons17"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <img className="vector-icon25" alt="" src="/vector20.svg" />
        </a>
        <div className="contact-us5">Contact Us</div>
        <div className="support5">Support</div>
        <div className="hellocevahgmailcom-parent3">
          <div className="hellocevahgmailcom5">hellocevah@gmail.com</div>
          <img className="envelope-icon5" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use5">Terms of Use</div>
        <div className="privacy-policy5">Privacy Policy</div>
        <div className="parent8">
          <div className="div5">+91 9922883377</div>
          <img className="vector-icon26" alt="" src="/vector.svg" />
        </div>
        <div className="faqs5">FAQs</div>
      </section>
      <header className="header5">
        <div className="content8">
          <div className="logo5" onClick={onLogoContainerClick}>
            <div className="icon15">
              <div className="icon-child8" />
              <div className="icon-child9" />
            </div>
            <h3 className="cevah11">CEVAH</h3>
          </div>
          <div className="language5">
            <img className="globe-icon5" alt="" src="/globe1@2x.png" />
            <div className="english5">English</div>
          </div>
          <div className="navigation5" />
        </div>
        <div className="login5">
          <h3 className="jd5">JD</h3>
        </div>
      </header>
      <section className="hero5">
        <img
          className="ad-placeholder-icon4"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
      </section>
      <div className="content9">
        <div className="content-child10" />
        <Button
          className="button-primary"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 346, height: 56 }}
          onClick={onButtonPrimaryClick}
        >
          Continue
        </Button>
        <h1 className="get-started-on">
          Get started on Cevah with two easy steps
        </h1>
        <div className="group-parent3">
          <div className="parent9">
            <div className="div6">1</div>
            <h2 className="tell-us-about5">Tell us about yourself</h2>
            <div className="share-you-name">
              Share you name, email and educational background
            </div>
          </div>
          <div className="ellipse-div" />
        </div>
        <div className="group-parent4">
          <div className="parent10">
            <div className="div6">2</div>
            <h2 className="tell-us-about5">Tell us about your place</h2>
            <div className="share-you-name">
              Share basic info like where it is located, services provided
            </div>
          </div>
          <div className="ellipse-div" />
        </div>
        <div className="line-div" />
      </div>
    </div>
  );
};

export default Desktop5;
