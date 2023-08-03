import "../css/skill.css";
import skill from "../data/skill";

function Skill() {
  return (
    <section>
      <div className="skill-container">
        <h1 className="a skill">Why Hire Me?</h1>
        <div className="a skill-wrapper">
          {skill.map((item, index) => {
            return (
              <div className="skill content box" key={index}>
                <div className="icon-container">
                  <div className="skill-icon">
                    <img className="icon-img" src={item.image} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p className="skill-desc">{item.decription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skill;
