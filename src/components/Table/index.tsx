import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { MoonLoader } from "react-spinners";

export default function Table(): ReactElement {
  const diagnosticData = useSelector(
    (state: RootState) => state.diagnostics.data
  );
  const loadingData = useSelector(
    (state: RootState) => state.diagnostics.loading
  );

  if (
    Array.isArray(diagnosticData) &&
    diagnosticData.length > 0 &&
    !loadingData
  ) {
    return (
      <div className="container">
        <h1 className="text-center mt-2">Results</h1>
        <table className="table mt-3 text-center">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Chance</th>
              <th scope="col">Specialisation</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticData.map((item, i) => (
              <tr key={i}>
                <td>{item["Issue"]["Name"]}</td>
                <td>{item["Issue"]["Accuracy"]}%</td>
                <td>
                  {item["Specialisation"].map((s) => (
                    <span key={s["ID"]}>{s["Name"]}, </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (loadingData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MoonLoader color={"#000"} loading={true} />
      </div>
    );
  } else {
    return <div></div>;
  }
}
