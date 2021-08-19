import React, { ReactElement } from "react";
import IllImage from "../../assets/images/ill.jpg";

export default function Introduction(): ReactElement {
  return (
    <div className="row" style={{ backgroundColor: "#cbd2da" }}>
      <div className="col-md-1"></div>
      <div className="col-md-4 py-5">
        <h1 className="display-3 px-4 px-md-0">Introduction</h1>
        <p className="text-justify font-akber px-4 px-md-0">
          We provide you a symptom checker system that helps you protect
          yourself. If you are not feeling well or having a potential illness,
          you can fill the diagnostic form with your informations.
        </p>
      </div>
      <div className="col-md-7 text-center">
        <img src={IllImage} className="w-75" alt="Erreur" />
      </div>
    </div>
  );
}
