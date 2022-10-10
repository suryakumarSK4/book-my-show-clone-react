import React from "react";
import Img from "../ImageComp/img";
import "./resNavList.css";

function resNavList() {
  return (
    <div className="res-top">
      <div className="res-div">
        <div className="res-imgs">
          <Img
            classname={"imgs"}
            address={
              "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-movies-collection-202201201113.png"
            }
          ></Img>
          <Img
            classname={"imgs"}
            address={
              "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-stream-collection-202201201113.png"
            }
          ></Img>
          <Img
            classname={"imgs"}
            address={
              "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-comedy-shows-collection-202201201113.png"
            }
          ></Img>
          <Img
            classname={"imgs"}
            address={
              "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-sports-collection-202201201113.png"
            }
          ></Img>
          <Img
            classname={"imgs"}
            address={
              "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-amusement-parks-collection-202201201113.png"
            }
          ></Img>
          <Img
            classname={"imgs"}
            address={
              "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-workshops-collection-202201201113.png"
            }
          ></Img>
          <Img
            classname={"imgs"}
            address={
              "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-see-all-collection-202201201113.png"
            }
          ></Img>
        </div>
      </div>
    </div>
  );
}

export default resNavList;
