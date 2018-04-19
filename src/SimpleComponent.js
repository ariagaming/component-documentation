import React from "react";
import PropTypes from "prop-types";

class SimpleComponent extends React.PureComponent {
  render() {
    return <div>This is a simple component</div>;
  }
}
SimpleComponent.propTypes = {
  /**
   * This is the desciption of the item
   */
  title: PropTypes.string.isRequired,
  something: PropTypes.element
};

export default SimpleComponent;
