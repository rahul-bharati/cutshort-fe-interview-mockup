import { createContext, useState } from "react";

export const OnboardingContext = createContext("");

export const OnboardingContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const gotoNextStep = () => {
    if (currentStep === 3) setCurrentStep(0);
    else setCurrentStep(currentStep + 1);
  };

  return (
    <OnboardingContext.Provider value={{ currentStep, gotoNextStep }}>
      {children}
    </OnboardingContext.Provider>
  );
};
