import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Button from "./../components/Button";
import Radio from "../components/CustomRadio";

import { HiUser, HiUserGroup } from "react-icons/hi";
import { useState } from "react";

const Step3 = () => {
  const [selected, setSelected] = useState("individual");
  return (
    <>
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
        <Button text="Create Workspace" />
      </div>
    </>
  );
};

export default Step3;