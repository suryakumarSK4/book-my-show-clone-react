import React from "react";
import Img from "../ImageComp/img";
import MovieList from "../MovieList/MovieList";

import "./Events.css";
function Events() {
  let events = [
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339581-jqhquwywgk-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338898-kqzulkrkby-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338898-kqzulkrkby-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338898-kqzulkrkby-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338898-kqzulkrkby-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339581-jqhquwywgk-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339581-jqhquwywgk-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339581-jqhquwywgk-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339581-jqhquwywgk-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339581-jqhquwywgk-portrait.jpg",
  ];

  let names = [
    "Alexperience",
    "Alexperience",
    "Alexperience",
    "Alexperience",
    "Alexperience",
    "Alexperience",
    "Alexperience",
    "Alexperience",
    "Alexperience",
    "Alexperience",
  ];
  let addresses = [
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
    "Sir Mutha Venkatasubba Rao Concert Hall: Chennai,3.77 kms away",
  ];
  return (
    <div className="events event-pad">
      <div className="eve-cont container">
        <h2>Events Happening Near You</h2>
      </div>
      <div className="eve-imgs  ">
        <div className=" res-div">
          {/* {events.map((event) => {
            return (
              <>
                <div className="eve-img-one">
                  <Img classname={"img-size gap"} alt={""} address={event} />

                  <div className="movie-details">
                    <div className="m-name">Alexperience</div>
                    <div className="m-catg">
                      Sir Mutha Venkatasubba Rao Concert Hall: Chennai
                    </div>
                    <div className="m-catg">3.77 kms away</div>
                  </div>
                </div>
              </>
            );
          })} */}

          <MovieList images={events} title={names} cont={addresses} />
        </div>
      </div>
    </div>
  );
}

export default Events;
