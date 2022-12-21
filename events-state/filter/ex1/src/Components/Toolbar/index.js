import React from "react";

class Toolbar extends React.Component {
  render() {
    return (
      <div className="container-toolbar">
        {this.props.filters.map((item, indx) => (
          <span
            className={`element-toolbar
              ${item === this.props.selected ? "elementActive-toolbar" : ""}
              `}
            key={indx}
            onClick={() => {
              this.props.onSelectFilter(item);
            }}
          >
            {item}
          </span>
        ))}
      </div>
    );
  }
}

export default Toolbar;
