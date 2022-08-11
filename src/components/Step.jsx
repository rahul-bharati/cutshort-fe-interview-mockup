import { useContext } from "react";
import { OnboardingContext } from "./../context/OnboardingContext";

const Step = () => {
  const { currentStep } = useContext(OnboardingContext);

  console.log({ currentStep });

  return (
    <div className="step-container">
      <div className={`step-counter ${currentStep >= 0 ? "fill" : ""}`}>1</div>
      <div
        className={`divider ${
          currentStep >= 0 && currentStep < 1 ? "half-fill" : "fill"
        }`}
      ></div>
      <div className={`step-counter ${currentStep >= 1 ? "fill" : ""}`}>2</div>
      <div
        className={`divider ${
          currentStep >= 1 && currentStep < 2
            ? "half-fill"
            : currentStep < 1
            ? ""
            : "fill"
        }`}
      ></div>
      <div className={`step-counter ${currentStep >= 2 ? "fill" : ""}`}>3</div>
      <div
        className={`divider ${
          currentStep >= 2 && currentStep < 3
            ? "half-fill"
            : currentStep < 3
            ? ""
            : "fill"
        }`}
      ></div>
      <div className={`step-counter ${currentStep >= 3 ? "fill" : ""}`}>4</div>
    </div>
  );
};

export default Step;
