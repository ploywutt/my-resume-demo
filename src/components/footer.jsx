import "../css/footer.css";
import mail from "../image/mail-grey.png";
import ig from "../image/ig-black.png";
import sendmail from "../image/send-black.png";

function Footer() {
  return (
    <section className="footer-container">
      <div className="a footer wrapper">
        <div className="icon wrapper">
          <img className="icon-link" src={mail} />
          <h6>ploy.wutt@gmail.com</h6>
        </div>
        <div className="reverse wrapper">
          <div className="copyright">
            <h6>© Copyright 2023 | ploywutt</h6>
          </div>
          <div className="footer-icon wrapper">
            <img className="icon-link mouse" src={ig} />
            <img className="icon-link mouse" src={sendmail} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
