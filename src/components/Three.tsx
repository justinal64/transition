import React from "react";
import { Step } from "../types/Step";

interface threeProps {
  setStep: (
    step: Step.One | Step.Two | Step.Three | Step.Four | Step.Five
  ) => void;
}

function Three(props: threeProps) {
  const { setStep } = props;
  return (
    <div>
      Step Three!!!
      <button onClick={() => setStep(Step.Four)}>Go To Step Four</button>
    </div>
  );
}

export { Three };
