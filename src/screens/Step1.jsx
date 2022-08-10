import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Input from "./../components/Input";
import Button from "./../components/Button";
import { useContext } from "react";
import { OnboardingContext } from "./../context/OnboardingContext";
import { AnimatePresence, motion } from "framer-motion";

const Step1 = ({ isVisible }) => {
  const { gotoNextStep } = useContext(OnboardingContext);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="motion-div"
          key="step1"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <Heading text="Welcome! First things first..." />
          <Subheading text="You can always change them later." />
          <div className="inputs-container">
            <Input type="text" placeholder="Steve Jobs" label="Full Name" />
            <Input type="text" placeholder="Steve" label="Display Name" />
            <Button text="Create Workspace" onClick={gotoNextStep} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Step1;
