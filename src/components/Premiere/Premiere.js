import React from "react";
import Carousel from "../Carousel/Carousel";
import Content from "../Contents/Content";
import Img from "../ImageComp/img";
import "./Premiere.css";
function Premiere() {
  let shows = [
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-tfcjhqgdmm-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00318402-hjavgjqelm-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00112828-kxuczrmlns-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00327391-tpnrdfmywz-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00333443-hjwlfrtsup-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00112828-kxuczrmlns-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00318402-hjavgjqelm-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-tfcjhqgdmm-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00333443-hjwlfrtsup-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00327391-tpnrdfmywz-portrait.jpg",
  ];

  let show_names = [
    "Top Gun: Maverick",
    "DC League of Super-Pets",
    "Jurassic World: Dominion",
    "Sky Sharks",
    "Spider-Man: No Way Home",
    "Top Gun: Maverick",
    "DC League of Super-Pets",
    "Jurassic World: Dominion",
    "Sky Sharks",
    "Spider-Man: No Way Home",
  ];

  let show_lang = [
    "English",
    "English",
    "English",
    "English",
    "English",
    "English",
    "English",
    "English",
    "English",
    "English",
  ];
  return (
    <div>
      <div className="premiere">
        <div className="pre-img container">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt=""
          />
        </div>

        <div className="content container">
          <div>
            <Content classname={"f-rem fw-700 white"} value={"Premieres"} />
          </div>
        </div>
        <div className="container">
          <div>
            <Content
              classname={"f-medium white"}
              value={"Brand new releases every Friday"}
            />
          </div>
        </div>
        <div className="pre-show">
          <div className="shows ">
            <div className="show-one ">
              {/* <Carousel _Itsposition={"left"} borderRadius={"br-round"} />
              <Carousel _Itsposition={"right"} borderRadius={"br-round"} /> */}
              {shows.map((show, index) => {
                return (
                  <div className=" gap">
                    <Img
                      classname={"img-size gap"}
                      address={show}
                      alt={""}
                      key={index}
                    />

                    <div className="show-details">
                      <div className="s-name">{show_names[index]}</div>
                      <div className="s-lang">{show_lang[index]}</div>
                    </div>
                  </div>
                );
              })}

              {/* <!-- slide icon --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premiere;
