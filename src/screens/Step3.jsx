import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Button from "./../components/Button";
import Radio from "../components/CustomRadio";

import { HiUser, HiUserGroup } from "react-icons/hi";
import { useState, useContext } from "react";
import { OnboardingContext } from "./../context/OnboardingContext";
import { motion } from "framer-motion";

const Step3 = ({ isVisible }) => {
  const { gotoNextStep } = useContext(OnboardingContext);

  const [selected, setSelected] = useState("individual");
  return (
    <>
      {isVisible && (
        <motion.div
          className="motion-div"
          key="step3"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <Heading text="How are you planning to use Eden?" />
          <Subheading text="We'll streamline your setup experience accordingly" />
          <div className="inputs-container">
            <div className="radios-container">
              <Radio
                icon={<HiUser />}
                value="individual"
                title="For myself"
                description="Write better. Think more clearly. Stay Organised."
                selected={selected}
                onChange={setSelected}
              />
              <Radio
                icon={<HiUserGroup />}
                value="team"
                title="With my team"
                description="Wikis, docs, tasks &amp; projects, all in one place."
                selected={selected}
                onChange={setSelected}
              />
            </div>
            <Button text="Create Workspace" onClick={gotoNextStep} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Step3;
