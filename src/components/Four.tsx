import React from "react";
import { Step } from "../types/Step";

interface fourProps {
  setStep: (
    step: Step.One | Step.Two | Step.Three | Step.Four | Step.Five
  ) => void;
}

function Four(props: fourProps) {
  const { setStep } = props;
  return (
    <div>
      Step Four!!!
      <button onClick={() => setStep(Step.Five)}>Go To Step Five</button>
    </div>
  );
}

export { Four };
