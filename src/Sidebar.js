import React from "react";
import goldpic from "./sidebar-photos/goldpic.png";
import silverpic from "./sidebar-photos/silverpic.png";
import palladiumpic from "./sidebar-photos/palladiumpic.png";
import platinumpic from "./sidebar-photos/platinumpic.png";
import "./Sidebar.css";

function Sidebar() {
  const pictures = [
    { imgSrc: goldpic, alt: "gold-pic" },
    { imgSrc: silverpic, alt: "silver-pic" },
    { imgSrc: palladiumpic, alt: "palladium-pic" },
    { imgSrc: platinumpic, alt: "platinum-pic" }
  ];

  return (
    <div className="sidebar-container">
      {/* old code, before refactor
      <img className="sidebar-pic" src={goldpic} alt="gold-pic" />
      <img className="sidebar-pic" src={silverpic} alt="silver-pic" />
      <img className="sidebar-pic" src={platinumpic} alt="platinum-pic" />
      <img className="sidebar-pic" src={palladiumpic} alt="palladium-pic" /> */}

      {/* new code, refactored below */}

      {pictures.map((pictureObj, index) => {
        return (
          <img
            key={index}
            className="sidebar-pic"
            src={pictureObj.imgSrc}
            alt={pictureObj.alt}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
