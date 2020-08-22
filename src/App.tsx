import React, { useState } from "react";
import logo from "./logo.svg";
import { One } from "./components/One";
import { Two } from "./components/Two";
import { Three } from "./components/Three";
import { Four } from "./components/Four";
import { Five } from "./components/Five";
import { Step } from "./types/Step";
import "./App.css";

// Don't use interface in the name....
interface stepInterface {
  step: Step.One | Step.Two | Step.Three | Step.Four | Step.Five;
}

function App() {
  const [currentStep, setCurrentStep] = useState(Step.One);

  const setStep = (
    step: Step.One | Step.Two | Step.Three | Step.Four | Step.Five
  ) => {
    setCurrentStep(step);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {currentStep === Step.One && <One setStep={setStep} />}
          {currentStep === Step.Two && <Two setStep={setStep} />}
          {currentStep === Step.Three && <Three setStep={setStep} />}
          {currentStep === Step.Four && <Four setStep={setStep} />}
          {currentStep === Step.Five && <Five setStep={setStep} />}
        </div>
      </header>
    </div>
  );
}

export default App;
