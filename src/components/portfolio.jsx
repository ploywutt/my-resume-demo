import "../css/portfolio.css";
import port from "../data/port";
import meme from "../image/meme.png";
import arrow from "../image/arrow.png";

function Portfolio() {
  return (
    <section className="portfolio-container">
      <div className="a portfolio wrapper">
        <h1>Portfolio</h1>
        <div className="see-more wrapper mouse">
          <p>See more</p>
          <img className="arrow" src={arrow} />
        </div>
      </div>
      <div className="a port-list">
        {port.map((item, index) => {
          return (
            <div className="pic-box" key={index}>
              <img className="secret" src={meme} />
              <img className="port-img mouse" src={item.image} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
