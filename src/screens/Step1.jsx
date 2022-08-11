import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Input from "./../components/Input";
import Button from "./../components/Button";
import { useContext, useEffect, useState } from "react";
import { OnboardingContext } from "./../context/OnboardingContext";
import { motion } from "framer-motion";

const Step1 = ({ isVisible }) => {
  const { gotoNextStep, userName, setUserName } = useContext(OnboardingContext);
  const [name, setName] = useState(userName);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    setUserName(name);
  }, [name, setUserName]);

  return (
    <>
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
            <Input
              type="text"
              placeholder="Steve Jobs"
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Steve"
              label="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <Button text="Create Workspace" onClick={gotoNextStep} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Step1;
