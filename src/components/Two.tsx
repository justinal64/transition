import React from "react";
import { Step } from "../types/Step";

interface twoProps {
  setStep: (
    step: Step.One | Step.Two | Step.Three | Step.Four | Step.Five
  ) => void;
}

function Two(props: twoProps) {
  const { setStep } = props;
  return (
    <div>
      Step Two!!!
      <button onClick={() => setStep(Step.Three)}>Go To Step Three</button>
    </div>
  );
}

export { Two };
