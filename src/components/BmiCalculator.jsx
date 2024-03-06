import React from "react";
import { useState } from "react";
import "./BmiCalculator.css";

const BmiCalculator = () => {
  const [height, setHeight] = useState(40);
  const setTheHeight = (e) => {
    setHeight(e.target.value);
  };

  const [weight, setWeight] = useState(40);
  const setTheWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div className="box">
      <div className="card">
        <h1>BMI Calculator</h1>
        <div className="inputs">
          <div className="height">
            <h3>Enter your height: <span>{height} cm</span> </h3>
            <input
              type="range"
              onChange={setTheHeight}
              className="weight"
              min="40"
              max="200"
            />
          </div>

          <div className="weight">
            <h3>Enter your weight: <span>{weight} Kg</span></h3>
            <input
              type="range"
              onChange={setTheWeight}
              className="weight"
              min="40"
              max="250"
            />
          </div>
        </div>

        <div className="bmi">
          <h2>YOUR BMI IS:</h2>
          <p>{(weight / ((height / 100) * (height / 100))).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
