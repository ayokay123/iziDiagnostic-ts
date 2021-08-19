import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultiSelect from "react-multi-select-component";
import { RootState } from "../../store";
import { getSymptoms } from "../../store/actions/symptomsAction";
import {
  getDiagnostic,
  setLoading,
} from "../../store/actions/diagnosticAction";

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout))

export default function Form(): ReactElement {
  const dispatch = useDispatch();
  const tokenData = useSelector((state: RootState) => state.token.token);
  const symptomsData = useSelector(
    (state: RootState) => state.symptoms.symptoms
  );

  const [year, setYear] = useState(0);
  const [gender, setGender] = useState("male");
  const [selected, setSelected] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (tokenData) {
      dispatch(getSymptoms(tokenData));
    }
  }, [tokenData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newArray = selected.map((item: { label: string; value: number }) => {
      return { ID: item.value, Name: item.label };
    });
    if (!year || isNaN(year)) {
      setErrors("Year of Birth is missing or invalid");
      return;
    }

    if (newArray.length === 0) {
      setErrors("Symptoms is missing or invalid");
      return;
    }

    dispatch(setLoading());
    await wait(5000)
    dispatch(getDiagnostic(tokenData, newArray, year));

    setSelected([]);
    setErrors("");
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div className="row pt-1">
        <div className="col-1 col-md-2"></div>
        <div className="col-10 col-md-8 text-center" style={{ color: "red" }}>
          {errors}
        </div>
        <div className="col-1 col-md-2"></div>
      </div>
      <div className="row py-5">
        <div className="col-1 col-md-2"></div>
        <div className="col-5 col-md-4 px-5">
          <div>
            <label className="form-text">Year of birth:</label>
          </div>
          <div>
            <input
              type="text"
              name="year"
              onChange={(e) => setYear(+e.target.value)}
              className="form-control"
              placeholder="AAAA"
            />
          </div>
        </div>
        <div className="col-5 col-md-4 px-5">
          <div>
            <label className="form-text">Gender:</label>
          </div>
          <div>
            <input
              type="radio"
              value="male"
              name="R1"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              className="form-check-input"
            />
            <label className="form-check-label">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="R1"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              className="form-check-input"
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>
        <div className="col-1 col-md-2"></div>
      </div>

      <div className="row">
        <div className="col-1 col-md-2"></div>
        <div className="col-10 col-md-8 py-2">
          <label className="font-akber">Symptoms:</label>
        </div>
        <div className="col-1 col-md-2"></div>
        <div className="col-1 col-md-2"></div>
        <div className="col-10 col-md-8 py-2 ">
          <MultiSelect
            options={symptomsData.map((item: { ID: number; Name: string }) => {
              return { label: item.Name, value: item.ID };
            })}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        </div>
        <div className="col-1 col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-1 col-md-2"></div>
        <div className="col-10 col-md-8 py-2"></div>
        <div className="col-1 col-md-2"></div>
      </div>

      <div className="row">
        <div className="col-1 col-md-2"></div>
        <div className="col-10 col-md-8 py-2 form-img">
          <div className="mt-5 py-3 btn-center">
            <button className="btn btn-inline btn-warning btn-lg mr-2">
              DIAGNOSE
            </button>
          </div>
        </div>
        <div className="col-1 col-md-2"></div>
      </div>
    </form>
  );
}
