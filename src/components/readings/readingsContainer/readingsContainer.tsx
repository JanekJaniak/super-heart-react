import { Fragment } from "react";

const ReadingsContainer = (props:any) => {
  console.log(props);
  return ( <Fragment>
    <div className="readings">
        <h2 className="readings__heading">READINGS</h2>
        <div className="readings__display">
          <div className="display-bar">
            <h5 className="display-bar__element">Pressure</h5>
            <h5 className="display-bar__element">Heart rate</h5>
            <h5 className="display-bar__element">Stress</h5>
          </div>
        </div>
      </div>
  </Fragment>)
} 

export default ReadingsContainer