import { Fragment } from "react";

const ReadingsContainer = (props:any) => {
  console.log(props);
  return ( <Fragment>
    <div className="readings">
        <h2 className="readings__heading">READINGS</h2>
        <div className="readings__display"></div>
      </div>
  </Fragment>)
} 

export default ReadingsContainer