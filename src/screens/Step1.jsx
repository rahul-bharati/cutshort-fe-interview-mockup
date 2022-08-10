import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Input from "./../components/Input";
import Button from "./../components/Button";

const Step1 = () => {
  return (
    <>
      <Heading text="Welcome! First things first..." />
      <Subheading text="You can always change them later." />
      <div className="inputs-container">
        <Input type="text" placeholder="Steve Jobs" label="Full Name" />
        <Input type="text" placeholder="Steve" label="Display Name" />
        <Button text="Create Workspace" />
      </div>
    </>
  );
};

export default Step1;
