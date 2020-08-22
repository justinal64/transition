import React from "react";
import { Step } from "../types/Step";

interface oneProps {
  setStep: (
    step: Step.One | Step.Two | Step.Three | Step.Four | Step.Five
  ) => void;
}

function One(props: oneProps) {
  const { setStep } = props;
  return (
    <div>
      Step One!!!
      <button onClick={() => setStep(Step.Two)}>Go To Step Two</button>
    </div>
  );
}

export { One };
