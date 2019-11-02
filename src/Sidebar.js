import React from "react";
import goldpic from "./sidebar-photos/goldpic.png";
import silverpic from "./sidebar-photos/silverpic.png";
import palladiumpic from "./sidebar-photos/palladiumpic.png";
import platinumpic from "./sidebar-photos/platinumpic.png";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div classname="sidebar-container">
      <img src={goldpic} alt="gold-pic" />
      <img src={silverpic} alt="silver-pic" />
      <img src={platinumpic} alt="platinum-pic" />
      <img src={palladiumpic} alt="palladium-pic" />
    </div>
  );
}

export default Sidebar;
