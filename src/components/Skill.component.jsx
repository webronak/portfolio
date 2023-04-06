import React from "react";

class SkillComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.percentage < this.props.percentage) {
        this.setState({ percentage: this.state.percentage + 1 });
      }
    }, 11);
  }

  render(props) {
    const labelStr =
      this.state.percentage < 30
        ? "beginner"
        : this.state.percentage < 70
        ? "intermediate"
        : "Perfect";
    return (
      <div className="skill">
        <img src={this.props.img} alt="react" />

        <div className="skillName">
          <h4>{this.props.name}</h4>
          <div className="progressBar">
            <div className="fullLimit">
              <div
                className="limit"
                style={{ width: `${this.state.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        {this.state.percentage == this.props.percentage && (
          <div className={`skill-badge percentage-${labelStr}`}>{labelStr}</div>
        )}
      </div>
    );
  }
}
export default SkillComponent;
