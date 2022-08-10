import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Input from "./../components/Input";
import Button from "./../components/Button";
import { useContext } from "react";
import { OnboardingContext } from "./../context/OnboardingContext";

const Step2 = ({ isVisible }) => {
  const { gotoNextStep } = useContext(OnboardingContext);

  return (
    <>
      {isVisible && (
        <>
          <Heading text="Let's setup a home for all your work" />
          <Subheading text="You can always create another workspace later." />
          <div className="inputs-container">
            <Input type="text" placeholder="Eden" label="Workspace Name" />
            <Input
              type="email"
              placeholder="Steve"
              label="Workspace URL"
              optionalText="(optional)"
            />
            <Button text="Create Workspace" onClick={gotoNextStep} />
          </div>
        </>
      )}
    </>
  );
};

export default Step2;
