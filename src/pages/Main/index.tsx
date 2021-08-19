import React, { ReactElement } from "react";
import Form from "../../components/Form";
import Table from "../../components/Table";

export default function Main(): ReactElement {
  return (
    <>
      <div className="py-5 sectionOne">
        <h1 className="text-center display-2 my-5 unclickable">
          Symptom Diagnolist
        </h1>
      </div>

      <div className="parallax-diag">
        <div className="row">
          <div className="parallax-shade-diag col-12 row py-5">
            <div className="col-md-2 col-1"></div>
            <div className="col-md-8 col-10 main-form">
              <Form />
            </div>
            <div className="col-md-2 col-1"></div>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
}
