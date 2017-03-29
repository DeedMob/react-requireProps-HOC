import React from 'react';

// Blocks WrappedComponent & Loads a loader element if any of requiredProps is null or undefined

const isValid = (value) => typeof value !== 'undefined' && value !== null;

const centerOfContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const fillContainer = {
  position: "relative",
  marginTop: "50px",
  width: "100%",
  height: "100%",
  color: "rgb(31, 182, 255)",
  fontSize: "30px"
};

const Loader = (
  <div style={fillContainer}>
    <i className="fa fa-spinner fa-pulse fa-fw" style={centerOfContainer}></i>
  </div>
);

const RequireProps = (required = []) => WrappedComponent => {
  const requireProps = props => {
    if (required.every(propName => isValid(props[propName]))) {
      return (<WrappedComponent {...props} />);
    }
    else {
      return Loader;
    }
  }

  return requireProps;
}


export default RequireProps;
