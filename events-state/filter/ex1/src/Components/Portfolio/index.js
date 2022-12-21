import React from "react";
import Toolbar from "../Toolbar";
import ProjectList from "../ProjectList";
import imgData from "../../Image/imgSet";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: imgData,
      categories: ["All", "Websites", "Flayers", "Business Cards"],
      activeCategory: "",
      sortedProjects: [],
    };
  }
  componentDidMount() {
    this.selectCategory("All");
  }

  selectCategory(value) {
    this.setState({ activeCategory: value });
    value === "All"
      ? this.setState({
          sortedProjects: imgData,
        })
      : this.setState({
          sortedProjects: this.state.projects.filter(function (x) {
            return x.category === value;
          }),
        });
  }

  render() {
    return (
      <>
        <Toolbar
          filters={this.state.categories}
          selected={this.state.activeCategory}
          onSelectFilter={(filter) => {
            this.selectCategory(filter);
          }}
        />
        <ProjectList projects={this.state.sortedProjects} />
      </>
    );
  }
}

export default Portfolio;
