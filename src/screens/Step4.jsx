import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Button from "./../components/Button";

import { AiFillCheckCircle } from "react-icons/ai";
import { useContext } from "react";
import { OnboardingContext } from "./../context/OnboardingContext";

const Step4 = ({ isVisible }) => {
  const { gotoNextStep } = useContext(OnboardingContext);

  return (
    <>
      {isVisible && (
        <>
          <div className="check-div">
            <AiFillCheckCircle />
          </div>
          <Heading text="Congratulations, Eren!" />
          <Subheading
            text="You have completed the onboarding, you can start using Eden!"
            isLast
          />
          <div className="inputs-container">
            <Button text="Launch Eden" onClick={gotoNextStep} />
          </div>
        </>
      )}
    </>
  );
};

export default Step4;
