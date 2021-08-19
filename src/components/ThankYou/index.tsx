import React, { ReactElement } from "react";
import ShieldImage from '../../assets/images/shield.jpg'

export default function ThankYou(): ReactElement {
  return (
    <div className="row" style={{ backgroundColor: "white" }}>
      <div className="col-md-6 text-center">
        <img src={ShieldImage} className="w-50" alt="Erreur" />
      </div>
      <div className="col-md-4 py-5">
        <h1 className="display-3  px-4 px-md-0">Thank you!</h1>
        <p className="text-justify font-akber px-4 px-md-0">
          We are regulary enhancing our system with new insights. We thank you
          for your trust!
        </p>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}
