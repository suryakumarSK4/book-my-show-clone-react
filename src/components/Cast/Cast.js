import React from "react";
import "./cast.css";
import { PS1_castImage, PS1_castName } from "../CastDetails/CastDetails";
import Img from "../ImageComp/img";
import Content from "../Contents/Content";

function Cast() {
  return (
    <div>
      <div className="componentTitle">
        <h4>Cast</h4>
      </div>
      <div className="componentContent d-flex res-div ">
        {PS1_castImage.map((cast, index) => {
          return (
            <div>
              <Img address={cast} key={index} classname={"castImage mr-20"} />
              <Content
                classname={"f-medium fw-500 text-center "}
                value={PS1_castName[index]}
              />
              <p className="text-center f-small">Actor</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cast;
