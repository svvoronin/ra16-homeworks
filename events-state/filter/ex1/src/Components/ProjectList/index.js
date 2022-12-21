import React from "react";

class ProjectList extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.projects.map((item, indx) => (
          <img key={indx} src={item.img} alt={item.category} />
        ))}
      </div>
    );
  }
}

export default ProjectList;
