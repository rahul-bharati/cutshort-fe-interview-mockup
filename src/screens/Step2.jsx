import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Input from "./../components/Input";
import Button from "./../components/Button";
import { useContext, useState } from "react";
import { OnboardingContext } from "./../context/OnboardingContext";
import { motion } from "framer-motion";

const Step2 = ({ isVisible }) => {
  const { gotoNextStep } = useContext(OnboardingContext);
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("");

  return (
    <>
      {isVisible && (
        <motion.div
          className="motion-div"
          key="step2"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <Heading text="Let's setup a home for all your work" />
          <Subheading text="You can always create another workspace later." />
          <div className="inputs-container">
            <Input
              type="text"
              placeholder="Eden"
              label="Workspace Name"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Steve"
              label="Workspace URL"
              optionalText="(optional)"
              value={workspaceUrl}
              onChange={(e) => setWorkspaceUrl(e.target.value)}
            />
            <Button text="Create Workspace" onClick={gotoNextStep} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Step2;
