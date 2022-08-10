import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Input from "./../components/Input";
import Button from "./../components/Button";
import { useContext } from "react";
import { OnboardingContext } from "./../context/OnboardingContext";

const Step1 = ({ isVisible }) => {
  const { gotoNextStep } = useContext(OnboardingContext);
  return (
    <>
      {isVisible && (
        <>
          <Heading text="Welcome! First things first..." />
          <Subheading text="You can always change them later." />
          <div className="inputs-container">
            <Input type="text" placeholder="Steve Jobs" label="Full Name" />
            <Input type="text" placeholder="Steve" label="Display Name" />
            <Button text="Create Workspace" onClick={gotoNextStep} />
          </div>
        </>
      )}
    </>
  );
};

export default Step1;
