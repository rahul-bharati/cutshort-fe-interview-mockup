import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Button from "./../components/Button";

import { AiFillCheckCircle } from "react-icons/ai";
import { useContext } from "react";
import { OnboardingContext } from "./../context/OnboardingContext";
import { motion } from "framer-motion";

const Step4 = ({ isVisible }) => {
  const { gotoNextStep, userName } = useContext(OnboardingContext);

  return (
    <>
      {isVisible && (
        <motion.div
          className="motion-div"
          key="step4"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <div className="check-div">
            <AiFillCheckCircle />
          </div>
          <Heading text={`Congratulations, ${userName}`} />
          <Subheading
            text="You have completed the onboarding, you can start using Eden!"
            isLast
          />
          <div className="inputs-container">
            <Button text="Launch Eden" onClick={gotoNextStep} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Step4;
