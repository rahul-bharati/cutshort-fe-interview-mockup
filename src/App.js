import { useContext } from "react";
import Logo from "./components/Logo";
import Step from "./components/Step";
import { OnboardingContext } from "./context/OnboardingContext";
import Step1 from "./screens/Step1";
import Step2 from "./screens/Step2";
import Step3 from "./screens/Step3";
import Step4 from "./screens/Step4";

function App() {
  const { currentStep } = useContext(OnboardingContext);
  return (
    <div className="App">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="step-container">
        <Step />
      </div>
      <Step1 isVisible={currentStep === 0} />
      <Step2 isVisible={currentStep === 1} />
      <Step3 isVisible={currentStep === 2} />
      <Step4 isVisible={currentStep === 3} />
    </div>
  );
}

export default App;
