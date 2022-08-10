import Heading from "./../components/Heading";
import Subheading from "./../components/Subheading";
import Input from "./../components/Input";
import Button from "./../components/Button";

const Step2 = () => {
  return (
    <>
      <Heading text="Let's setup a home for all your work" />
      <Subheading text="You can always create another workspace later." />
      <Input type="text" placeholder="Eden" label="Workspace Name" />
      <Input
        type="email"
        placeholder="Steve"
        label="Workspace URL"
        optionalText="(optional)"
      />
      <Button text="Create Workspace" />
    </>
  );
};

export default Step2;
