import React, { useState, Children } from "react";
import "../assets/style/components/Dropdown.css";

function Dropdown(props) {
  const [showState, setShowState] = useState(false);
  const [choosed, setChoosed] = useState(props.children[0].props.value);

  function toggleShow() {
    setShowState(!showState);
  }

  function choose(value) {
    setChoosed(value);
    toggleShow();
  }

  function renderOptions() {
    return Children.map(props.children, (child) =>
      React.cloneElement(
        child,
        {
          onClick: () => {
            choose(child.props.value);
          },
        },
        child.props.value
      )
    );
  }

  return (
    <div className="dropdown-component">
      <div className="dropdown-container">
        {choosed}
        <div className={showState ? null : "hide"}>{renderOptions()}</div>
      </div>
      <div className="dropdown-control" onClick={toggleShow}>
        <span style={showState ? { transform: "rotate(180deg)" } : {}}>
          <i className="fas fa-sort-down"></i>
        </span>
      </div>
    </div>
  );
}

export default Dropdown;
