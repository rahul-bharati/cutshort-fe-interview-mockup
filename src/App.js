import Button from "./components/Button";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Logo from "./components/Logo";
import Step from "./components/Step";
import Subheading from "./components/Subheading";

function App() {
  return (
    <div className="App">
      <Logo />
      <Step />
      <Heading text="Welcome! First things first..." />
      <Subheading text="You can always change them later." />
      <Input type="text" placeholder="Steve Jobs" label="Full Name" />
      <Input type="text" placeholder="Steve" label="Display Name" />
      <Button text="Create Workspace" />
    </div>
  );
}

export default App;
