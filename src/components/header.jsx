import "../css/header.css";
import link from "../data/link";
import profile from "../image/profile.png";

function Header() {
  return (
    <section className="header-container">
      <h2 className="a my-profile">MY PROFILE</h2>
      <div className="a wrapper">
        <div className="content">
          <h3 className="hi">Hi!</h3>
          <h2>
            I am Ploy.
            <br />a Frontend developer.
          </h2>
          <h4 className="head-desc">
            Frontend developer based in tehran, Iran. I am coding with a clean
            and beautiful problem solving in mind.
          </h4>
          <div className="follow-me">
            <p className="hide">Follow me</p>
            <div className="icon wrapper">
              {link.map((link, index) => {
                return (
                  <div className="network-icon click" key={index}>
                    <img className="icon-link" src={link.image} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="profile-button">
            <button type="button" className="click">
              Send Request
            </button>
            <button type="button" className="click">
              Download CV
            </button>
          </div>
        </div>
        <img className="profile-img hide" src={profile} />
      </div>
    </section>
  );
}

export default Header;
