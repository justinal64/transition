import React from "react";
import { Step } from "../types/Step";

interface fiveProps {
  setStep: (
    step: Step.One | Step.Two | Step.Three | Step.Four | Step.Five
  ) => void;
}

function Five(props: fiveProps) {
  const { setStep } = props;
  return (
    <div>
      Step Five!!!
      <button onClick={() => setStep(Step.One)}>Go To Step One</button>
    </div>
  );
}

export { Five };
