import React, { ReactElement } from "react";
import DocImage from "../../assets/images/doc.jpg";

export default function Info(): ReactElement {
  return (
    <div className="row py-5" style={{ backgroundColor: "white" }}>
      <div className="col-md-6 text-center">
        <img src={DocImage} className="w-50" alt="Erreur" />
      </div>
      <div className="col-md-4">
        <p className="text-justify font-akber px-4 px-md-0 my-5">
          Once you enter the symptoms you have in the interface, or API will do
          the math and it will tell you if you're suffering from a possible
          disease. The results may not be 100% correct but you can rely on it
          most of the time!
        </p>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}
