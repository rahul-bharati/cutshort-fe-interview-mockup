import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Button from "./../components/Button";

import { AiFillCheckCircle } from "react-icons/ai";

const Step4 = () => {
  return (
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
        <Button text="Launch Eden" />
      </div>
    </>
  );
};

export default Step4;
